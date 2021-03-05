Object.prototype.myCall = function() {
  const args = Array.from(arguments);
  const context = args.shift();

  const fn = this;
  context.fn = fn;
  if(args.length === 0) {
    return context.fn()
  } else {
    return context.fn(...args);
  }
}

const obj = {name: 'hayho'};
function  print(x, y) {
    console.log(this.name, arguments)
  }

// const res = print.myCall(obj,10,20);

Object.prototype.myApply = function(context, args=[]) {
  const fn = this;
  context.fn = fn;
  if(args.length === 0) {
    return context.fn()
  } else {
    return context.fn(...args);
  }
}

const res = print.myApply(obj);
