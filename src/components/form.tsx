import React, { Component } from 'react';

interface Login{
    username?:React.ReactNode
}
class form extends React.Component<Login> {
    constructor(props:Login) {
        super(props)
    
        this.state = {
             username: ''
        }
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    {/* <input type='text' value={this.state.username}/> */}
                </div>
            </form>
        );
    }
}

export default form;