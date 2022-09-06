import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    // increment count
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    // decrement count
    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <>
                {/* get count with class */}
                <h1>Count: {this.state.count}</h1>

                {/* increment state */}
                <button onClick={() => this.increment()}>+</button>

                {/* decrement state */}
                <button onClick={() => this.decrement()}>-</button>
            </>
        );
    }
}