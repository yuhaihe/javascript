import React from 'react'
import _ from 'loadsh';

class App extends React.Component {
    constructor(props) {
        super(props)
       this.state = {
           list: []
       }
    }
    render() {
        return <p>This is App Component.</p>
    }
}

export default App
