import React from 'react'
import './DefaultDisplay.css';
/* Components */
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

export default function DefaultDisplay(props){
  const {addNewItem, itemList, resetWizard} = props;
  return (
    <Card zDepth={2} className='default-display'>
      <h1>Welcome to Product Inquiry Wizard Ver 1.0!</h1>
      <h2>An intro to the Wizard</h2>
      <CardText className='display-paragraph'>
        Air Management Specialists drives to get the best products at
        the best prices and that can often mean gathering different
        products from several different distributors; in addition, AMS
        offers assembly service for ordered items. Because of the case
        by case nature of ordering products from AMS, this product
        inquiry wizard was designed to allow anyone to easily submit
        an inquiry of desired products to AMS for evalutation. AMS
        will be able to use this information to custom tailor the best
        products at the best prices for your process control or
        air pollution control.
      </CardText>
      <h2>So... what exactly can I use this for?</h2>
      <h3>The Main Use</h3>
      <CardText className='display-paragraph'>
        The primary purpose of the Product Inquiry Wizard is to create
        inquiries of one or more items that can be sent to AMS for
        analysis. Air Management Specialists will contact all
        submissions in order to discuss details and negociate a
        transaction.
      </CardText>
      <h3>Other Uses</h3>
      <CardText className='display-paragraph'>
        The flexibility of the wizard allows it to serve as a planner
        for process control and pollution control equipment. The
        wizard allows anyone to document different characterstics of
        4 different equipment types: Actuators, dust collectors,
        instrumentation (e.g., gauges), and valves. There are several
        sections of the wizard that allow a user to include notes on
        different features of the equipment as well as an additional
        notes section at the end for general notes on the device or
        information that doesn't quite fit into a specific category.
      </CardText>
      <h3>What this Wizard doesn't do</h3>
      <CardText className='display-paragraph'>
        This Wizard does not provide information on pricing, because
        of the case by case service of this business pricing is only
        discussed via email or phone or in person. If you would like
        to get in contact directly with AMS rather than use the wizard
        please see our <Link to='/contact'>contact section.</Link>&nbsp;
        Another important note is that an inquiry is just that, an
        inquiry; AMS is does not treat inquiries as a transaction,
        contract, or written document for a service or product. AMS
        retains the right to terminate any relations with potential
        customers for any reason prior to any written contract for
        service or products. This wizard is meant to be used as a tool
        to better serve the needs of AMS's clientele and does not
        represent the products or services of any third party organization
      </CardText>
      <h2>Get started</h2>
      <CardText className='display-paragraph'>
        The inquiry wizard is fairly simple to use, each page of the wizard
        won't allow you to progress until you've fulfilled the required
        fields. Once you've reached the final page you will have the option
        to select a 'submit' button. After pressing submit the wizard will
        close and your new inquiry item will be displayed on this page. You
        may choose to add more items to your inquiry or you can select the
        'submit' option on this page to open a new sub-window where you can enter
        in your contact information. Once the required fields are fulfilled
        you may select the 'send' option to send your inquiry to AMS.
      </CardText>
      <CardText className='display-paragraph'>
        Ready to start an inquiry? Go ahead and select the button below:
      </CardText>
      <div className='default-display-button-wrapper'>
        <Link to='/productinquiry'>
          <RaisedButton
            secondary={true}
            label={itemList && itemList.length > 0 ? '+ Add Item' : 'Click here to start an inquiry'}
            onClick={()=>{addNewItem(); resetWizard();}}
          />
        </Link>
      </div>
      <h2>Notes about the current version</h2>
      <CardText className='display-paragraph'>
        This is the primary testing version, conversion calculations
        have not been implemented yet. All measurements are recorded
        in the Standard US format. Metric units will be implemented
        into the next version.
      </CardText>
      <h5>AMS Inquiry Wizard&trade; Version 1.0</h5>
    </Card>
  );
}
