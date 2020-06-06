import * as React from 'react';


interface IProps{
    preview:string;
}

interface SProps{
    open:boolean;
}
export default class Todolist extends React.Component<IProps,SProps> {
    state = {
        open: false
    }
    render()
    {
        if (this.state.open){
            return (
            <> 
                {this.props.children} 
                <br />
                <div onClick={() => this.setState({open:false})}>closed</div>
            </>
            );
        }

        return (
            <> 
                {this.props.preview} 
                <br />
                <div onClick={() => this.setState({open:true})}>Open</div>
            </>
            );
        
    }
}

