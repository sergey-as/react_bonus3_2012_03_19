import React, {Component} from 'react';

class Counter extends Component {
    intervalId = 0;

    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('mount');
        let interval = setInterval(()=> console.log('hello'), 1000);
        this.intervalId = interval;
        console.log(interval);
    }
    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.intervalId);
        console.log(this.intervalId);
    }

    render() {
        console.log('render');

        return (
            <div>
                Counter works
            </div>
        );
    }
}

export default Counter;