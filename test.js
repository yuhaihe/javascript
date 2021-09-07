Object.prototype.__proto__;
Function.prototype.__proto__; 
Object.__proto__; // function
Object instanceof Function; // true
Function instanceof Object; // false
Function.prototype === Function.__proto__;
