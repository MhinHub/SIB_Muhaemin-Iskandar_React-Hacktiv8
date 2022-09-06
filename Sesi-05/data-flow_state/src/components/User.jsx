
import React from 'react';


export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'John Doe',
        }
    }
    // function to get username
    getUsername() {
        return this.state.username
    }

    // function to set username
    setUsername() {
        this.setState({
            username: 'Muhaemin Iskandar'
        })
    }
    render() {
        return (
            <>
                {/* get username with class */}
                <h1>Class: {this.state.username}</h1>

                {/* get username with function */}
                <h1>Function: {this.getUsername()}</h1>

                {/* set username with function */}
                <button onClick={() => this.setUsername()}>Change Username</button>
            </>
        )
    }
}