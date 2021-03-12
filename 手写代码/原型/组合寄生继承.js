function Parent() {
  this.favorite = 'momey';
}

function Child() {
  Parent.call(this);
  this.age = 18;
}

Child.prototype = Object.create(Parent.prototype);
Object.setPrototypeOf(Child,Parent);
Child.prototype.constructor = Child;

const son = new Child();
console.log(son.age)
console.log(son.favorite)
