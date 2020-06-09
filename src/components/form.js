import React, { Component } from 'react';

class form extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fullName:null 
        }
    }
    HandleSubmit = (event) => {

        event.preventDefault()

    }
    handlerInputChange = (event) =>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
        this.state = {
            fullName:event.target.value
        }
    }

    handlerpopup =(event)=>{
        event.preventDefault()
        alert(this.state.fullName)
    }

    render() {
        const {fullName} = this.state
        return (
            <div>
                <h1>Form example</h1>
                <form onSubmit={this.HandleSubmit}>
                <p>fullName is : {fullName}</p>
                <p><input type='text' placeholder='Your name' name='fullName' onChange={this.handlerInputChange} /></p>
                <button onClick={this.handlerpopup}>DEMo</button>
                </form>
            </div>
        );
    }
}

export default form;