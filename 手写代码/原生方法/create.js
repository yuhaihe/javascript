/**
 * Object.create
 */

 Object.prototype.myCreate = (target) => {
   if(typeof target !== 'object') {
     throw Error(`Object prototype is not ${typeof target}`);
   }
    const F = function() {};
    F.prototype = target;
    return new F();
 }
const obj = {name: 'hayho'};
const newObj = Object.myCreate(obj);
console.log(newObj.name)
