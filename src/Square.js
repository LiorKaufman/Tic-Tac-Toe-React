
import React from 'react';
import './App.css';

class Square extends React.Component {

    handleClick = (e) => {
        this.props.addSymbol(e)
    }
    render(){
        return (
            <div className ='square'
            onClick = { this.handleClick }
            name = {this.props.id}
            >
            </div>
        );
    }
}

export default Square;
