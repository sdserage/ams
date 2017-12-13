export function getNext(path=[''], locationString){
  let nextIndex = path.indexOf(locationString) + 1;
  if(nextIndex >= path.length){
    nextIndex--;
  }
  return path[nextIndex];
}

export function getPrevious(path=[''], locationString){
  let previousIndex = path.indexOf(locationString) - 1;
  if(previousIndex < 0){
    previousIndex = 0;
  }
  return path[previousIndex];
}

export default {
  getNext,
  getPrevious
};
