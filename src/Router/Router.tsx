import React, { Component } from 'react'
import Todolist from '../components/Todolist'

export default class RouterDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>HELLO FROM ROUTER!</h1>
                <Todolist preview="Click me">
                Title changes the articles title at the top, and summary adds a short description of the article underneath the title. 
                This summary will appear on index pages, so make sure it is a good description of your article. 
                </Todolist>
            </div>
        );
    }
}

