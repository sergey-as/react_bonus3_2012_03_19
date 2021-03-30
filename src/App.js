import React, {Component} from 'react';
import Counter from "./components/Counter";
import Characters from "./components/Characters/Characters";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    // state = {
    //     counters: ['a']
    // }

    render() {

        return (
            <div>
                {/*{*/}
                {/*    this.state.counters.map(counter => <Counter/>)*/}
                {/*}*/}
                {/*<button onClick={() => {*/}
                {/*    let {counters} = this.state;*/}
                {/*    counters.pop();*/}
                {/*    this.setState({counters: counters});*/}
                {/*}}>delete counter*/}
                {/*</button>*/}

                <Characters/>
            </div>
        );
    }
}

export default App;