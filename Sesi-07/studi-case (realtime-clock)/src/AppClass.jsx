import React from 'react';

class AppClass extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date() // state awal 
        }
    }

    // update state dengan state baru
    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    // Akan dipanggil ketika sebuah komponen selesai diletakkan di DOM
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // Akan dipanggil sebelum kita menghapus komponen dari DOM
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className='App'>
                <h1>Realtime Clock dengan Class Component</h1>
                <hr />
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default AppClass;