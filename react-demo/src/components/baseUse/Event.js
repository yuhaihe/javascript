import React, { Component, Fragment } from 'react'

class Obersve {
    constructor(props) {
        this.fn = null;
        this.name = null;
    }

    on(name, fn) {
        this.name = name;
        this.fn=fn;
    }
    emit(name, ...arg){
        this.fn(...arg);
    }
}
const Ob = new Obersve();
 class Demo1 extends Component{
     componentDidMount() {
      
     }
     emit() {
        Ob.emit('change', 'hhhhhhhhhhhhh')
     }
    render() {
        return <div>
            <span>兄弟组件1</span>
            <button onClick={this.emit}>改变组件2值</button>
        </div>
    }
}
 class Demo2 extends Component{
     constructor(props) {
         super(props)
         console.log('子组件','constructor')
        this.state = {
            title: '兄弟组件2'
        }
     }
     componentDidMount() {
        console.log('子组件','componentDidMount')
        Ob.on('change', this.change.bind(this))
     }
     componentDidUpdate() {
        console.log('子组件','componentDidUpdate')
    }
     change(val) {
         console.log(val)
         console.log(this)
        this.setState({
            title: val
        })
    }
    render() {
        return <div>
            <span>{this.state.title}</span>
        </div>
    }
}

export default class Demo extends Component{
    constructor(props){
        super(props);
        console.log('父组件','constructor')
    }
    componentDidMount() {
        console.log('父组件','componentDidMount')
    }
    componentDidUpdate() {
        console.log('父组件','componentDidUpdate')
    }
    render() {
        return <div>
            <Demo1/>
            <Demo2/>
        </div>
    }
}