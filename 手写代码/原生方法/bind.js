Object.prototype.myBind = function() {
  const args = Array.prototype.slice.call(arguments);
  const context = args.shift();
  // context.fn = this;
  const fn = this;
  return function() {
    fn.call(context, ...args);
    // context.fn(...args);
  }
}

const obj = {name: 'hayho'};
function  print(x, y) {
    console.log(this.name, arguments)
  }

const fn = print.myBind(obj);
fn();