// function fn(a, c) {
//     console.log('a1', a);
//     var a = 123
//     console.log('a2', a)
//     console.log('c1', c)
//     function a() { }
//     if (false) {
//         var d = 678
//     }
//     console.log('d1', d)
//     console.log('b1', b)
//     var b = function () { }
//     console.log('b2', b)
//     function c() { }
//     console.log('c2', c)
// }
// fn()

let result = res.result
let shopArr = []
this.total1 = res.total
result.forEach((item, index) => {
    item.flag = true
    var isExist = false;
    arr.forEach(li => {
        if (item.id === li.id) {
            isExist = true
            return false
        }
    })
    if (!isExist) {
        shopArr.push(item);
    }
})

// this.tableData.shoppData = shopArr;

// var a = 3;    
// function fn(a) {
//     a = a + 1;
//     return a
// }
// let b = fn(a);
// console.log('b', b);
// console.log('a', a);

let shopArr = []
nowCustomers.forEach((item, index) => {
  console.log('item', item)
  var isExist = false;
  noticeCustomers.forEach(li => {
    if (item._id === li._id) {
      isExist = true
    }
  })
  if (!isExist) {
    shopArr.push(item);
  }
})