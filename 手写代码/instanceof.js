/**
 * 
 * @param {*} left 左侧必须为对象
 * @param {*} right  右侧为原型
 */
// function myInstanceOf(left, right) {
//     if(typeof left !== 'object' || left == null) {
//         return false;
//     }
//     let proto = Object.getPrototypeOf(left);
//     while(true) {
//         if(proto===null) return false;
//         if(proto === right.prototype) return true;
//         proto = Object.getPrototypeOf(proto)
//     }
// }


function myInstanceOf(left, right) {
    if(typeof left !== 'object' || left == null) {
        return false;
    }

    let proto = left.__proto__;
    while(proto!=null) {
        if(proto === right.prototype) {
            return true;
        }
        proto = proto.__proto__;
    }

    return false
}

console.log(myInstanceOf([], Object));