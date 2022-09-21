import { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

class CounterClass extends Component {
    state = {
        incrementAmount: 0
    }

    setIncrementAmount = (v) => {
        this.setState({ incrementAmount: Number(v) || 0 });
    }

    render() {
        return (
            <div className="demo">
                <h1>Class Component Counter</h1>
                <h1 id="counter">{this.props.localCount}</h1>
                <button id="decrement" onClick={() => this.props.dispatch(decrement())}>-</button>
                {' '}
                <button id="increment" onClick={() => this.props.dispatch(increment())}>+</button>
                {' '}
                <input type="number" value={this.state.incrementAmount} onChange={e => this.setIncrementAmount(e.target.value)} />
                <button id="incrementByAmount" onClick={() => this.props.dispatch(incrementByAmount(this.state.incrementAmount))}>Add Amount</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localCount: state.counter.count
    }
}

export default connect(mapStateToProps)(CounterClass);