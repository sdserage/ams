function filterQueries(inquiryList, query){
  const {name, email, date, phone_number, is_test} = query;
  return inquiryList.filter(inquiry=>{
    if(name){
      if(inquiry.name.includes(name) === false){
        return false;
      }
    }
    if(email){
      if(inquiry.email.includes(email) === false){
        return false;
      }
    }
    if(date){
      const dateObj = new Date(date);
      if(inquiry.date > dateObj){
        return false;
      }
    }
    if(phone_number){
      if(inquiry.phone_number.includes(phone_number) === false){
        return false;
      }
    }
    if(is_test){
      return inquiry.is_test === is_test;
    }
    return true;
  });
}

function createInquiry(req, res, next){
  const db = req.app.get('db');
  const {
    name,
    email,
    phone_number,
    itemList
  } = req.body;
  const date = new Date();
  db.create_inquiry([name, email, phone_number, date])
    .then(inquiryArr=>{
      const {inquiry_id} = inquiryArr[0];
      itemList.map(item=>{
        db.create_inquiry_item([inquiry_id, item.item_type])
          .then(inquiryItemArr=>{
            const {item_id, item_type} = inquiryItemArr[0];
            switch (item_type) {
              case 'Actuator':
                db.create_actuator([
                  item_id,
                  item.valve_size,
                  item.torque,
                  item.valve_additional_information,
                  item.return_type,
                  item.stem_dimensions,
                  item.stem_additional_information,
                  item.additional_information
                ]);
                break;
              case 'Dust Collector':
                db.create_dust_collector([
                  item_id,
                  item.particulate_types.join(','),
                  item.particulate_size,
                  item.temperature,
                  item.additional_information
                ]);
                break;
              case 'Instrumentation':
                db.create_instrumentation([
                  item_id,
                  item.process,
                  item.temperature,
                  item.pressure,
                  item.pipe_size,
                  item.pipe_additional_information,
                  item.additional_information
                ]);
                break;
              case 'Valve':
                db.create_valve([
                  item_id,
                  item.process,
                  item.temperature,
                  item.pressure,
                  item.pipe_size,
                  item.pipe_additional_information,
                  item.additional_information
                ]);
                break;
              default:
                console.log('Failed to add: ', inquiryItemArr[0], item);
                break;
            }
          })
      });
      db.get_standard_inquiries()
        .then(inquiryList=>{
          res.status(201).send(inquiryList);
        })
    })
}

function getInquiries(req, res, next){
  const db = req.app.get('db');
  const {query} = req;
  const {include} = query;
  if(!include || include === 'non-archived'){
    db.get_standard_inquiries().then(inquiryList=>{
      const filteredList = filterQueries(inquiryList, query);
      res.status(200).send(filteredList);
    });
  }else if(include === 'archived'){
    db.get_archived_inquiries().then(inquiryList=>{
      const filteredList = filterQueries(inquiryList, query);
      res.status(200).send(filteredList);
    })
  }else{
    db.get_all_inquiries().then(inquiryList=>{
      const filteredList = filterQueries(inquiryList, query);
      res.status(200).send(filteredList);
    })
  }
}

function getInquiryItems(req, res, next){
  const db = req.app.get('db');
  const {inquiry_id} = req.params;
  if(inquiry_id){
    db.get_actuators_from_inquiry([inquiry_id]).then(actuators=>{
      db.get_dust_collectors_from_inquiry([inquiry_id]).then(dustCollectors=>{
        dustCollectors = dustCollectors.map(dc=>{
          dc.particulate_types = dc.particulate_types.split(',');
          return dc;
        })
        db.get_instrumentations_from_inquiry([inquiry_id]).then(instrumentations=>{
          db.get_valves_from_inquiry([inquiry_id]).then(valves=>{
            const itemList = [
              ...actuators,
              ...dustCollectors,
              ...instrumentations,
              ...valves
            ];
            res.status(200).send(itemList);
          });
        });
      });
    })
  }else{
    res.status(500).send([]);
  }
}

function inquiryArchiveToggle(req, res, next){
  const db = req.app.get('db');
  const {inquiry_id} = req.params;
  db.get_inquiry_by_id([inquiry_id]).then(inquiry=>{
    if(inquiry[0].is_archived){
      db.unarchive_inquiry([inquiry_id]).then(unarchivedInquiry=>{
        res.status(200).send(unarchivedInquiry);
      });
    }else{
      db.archive_inquiry([inquiry_id]).then(archivedInquiry=>{
        res.status(200).send(archivedInquiry);
      });
    }
  });
}

function deleteInquiry(req, res, next){
  const db = req.app.get('db');
  const {inquiry_id} = req.params;
  db.delete_inquiry_by_id([inquiry_id]).then(inquiryList=>{
    res.status(200).send(inquiryList);
  });
}

module.exports = function inquiries(app){
  /* User end */
  app.post('/api/inquiries', createInquiry);
  /* Admin end */
  app.get('/api/inquiries', getInquiries);
  app.get('/api/inquiries/inquiry_items/:inquiry_id', getInquiryItems);
  app.put('/api/inquiries/:inquiry_id', inquiryArchiveToggle);
  app.delete('/api/inquiries/:inquiry_id', deleteInquiry);
}
