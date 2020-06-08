import * as React from 'react';


interface IProps{
    preview:string;
}

export default class Todolist extends React.Component<IProps,any> {
    constructor(props:IProps) {
        super(props);
        this.state = {open:false}

    }
    button1 = () => {
        this.setState({open: false});
    }
    button2 = () => {
        this.setState({open: true});
    }
    render()
    {
        if (this.state.open){
            return (
            <>
                {this.props.children} 
                <br />
                <div>
                <button onClick={this.button1}>Closed</button></div>
            </>
            );
        }
        return (
            <> 
                {this.props.preview} 
                <br />
                <div>
                <button onClick={this.button2}>OPen</button>
                </div>
            </>
            );
        
    }
}