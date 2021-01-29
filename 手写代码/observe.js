class Observe {
    constructor() {
        this.handlers = {};
    }

    on(name, fn) {
        if(this.handlers[name] == null) {
            this.handlers[name] = [fn]
        } else {
            this.handlers[name].push(fn);
        }
    }

    emit() {
        const eventNames = Array.prototype.slice.call(arguments);
        eventNames.forEach(name => {
            if(this.handlers[name]) {
                this.handlers[name].forEach((fn, index) => {
                    fn(name, index);
                })
            }
        })
    }

    off(name) {
        delete this.handlers[name];
    }
}

const ob = new Observe();
ob.on('test', function(){
    console.log('test')
})
ob.on('test', function(){
    console.log('test1')
})
const obj ={
    a:1,
    hello() {
        console.log(this.a)
    }
}
ob.on('test', obj.hello.bind(obj))
ob.emit('test');
ob.off('test');
ob.emit('test');