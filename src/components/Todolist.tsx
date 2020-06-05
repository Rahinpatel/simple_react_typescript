import * as React from 'react';


interface IProps{
    text:string;
}

export default class Todolist extends React.Component<IProps> {
    render(){
    const {text} = this.props;
    return (
        <div>
            {text}
        </div>
    )
}
}

