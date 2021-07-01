let obj = {};

function allocate(str){
  if(obj[str] === undefined){
    obj[str] = [1];
  }else{
    const arr = obj[str];
    let curr = 0;
    const len = arr.length;
    const isAdded = false;
    for(let i=0;i<len;i++){
      if(arr[i] - curr > 1){
        arr.splice(i, 0, curr+1);
        isAdded = true;
        break;
      }
      curr = arr[i];
    }
    if(isAdded === false){
      arr.push(arr[len-1]+1);
    }
  }
}

function deallocate(str){
  var num = parseInt(str.match(/\d+/g));
  var word = str.match(/[a-zA-Z]+/g);
  if(obj[word] === undefined || obj[word] === null){
    return 'not found';
  }
  const arr = obj[word];
  for(let i=0;i<arr.length;i++){
    if(arr[i] === num){
      arr.splice(i, 1);
      obj[word] = arr;
      return 'done';
    }
  }
  return 'not found';
}

allocate('apibox');
allocate('apibox');
allocate('apibox');
deallocate('apibox2');
console.log(JSON.stringify(obj['apibox']));