import React, { Component } from 'react';

interface Person {
    firstname?: string;
    lastname?: string;

}
interface Props{
    text?: string;
    number?: number;
    person?: Person;
}

let abc = 'Alert handle'

class Add extends React.Component<Props> {
   handlePick(){
       alert('error handle')
   } 
    render() {
        
        return (
            <div>
                {abc}<br />
                <button onClick={this.handlePick}>Execute</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e:any) {
        e.PreventDefault();
        alert(e.target.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleAddOption(e)}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            {/* <button OnClick={this.handlePick}></button>*/}
            </div>
        );
    }
}

export  {Add,AddOption}
