var array = [12, 4, 50, 1, 0, 18, 40];//2
let isZero = array.every(function(currEl) {
      return currEl === 0
  });
let array2 = ['yes', 'hello', 'no', 'easycode', 'what'];//3
let isBiggerThanThree = array2.some(function(currEl){
return currEl.length > 3
});
//4
let array3 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
let SortedArray = array3.sort(function (a, b) {
  if (a.index > b.index) { //это я списал з инета, ибо самостоятельно в жизни никогда не написал бы. Каким образом сюда приписывает
    return 1;
  }
  if (a.index < b.index) {
    return -1;
  }
  return 0;
});

// var result = arr.reduce(function(sum, current) { //Ну и как мне вытаскивать с объектов эти строки и суммировать их? 
//   return sum + current
// });

//sort
//1
[{cpu: 'intel', info: {cores:2, сache: 3}}, {cpu: 'intel', info: {cores:4, сache: 4}}, {cpu: 'amd', info: {cores:1, сache: 1}}, {cpu: 'intel', info: {cores:3, сache: 2}}, {cpu: 'amd', info: {cores:4, сache: 2}}]// ну а тут как? Как я должен сорьтровать по 
