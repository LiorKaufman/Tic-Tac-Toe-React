import React from 'react';
import './App.css';

class Square extends React.Component {

    render(){
        return (
            <div
            className = 'squares'
            onClick = {this.props.onClick}
            name    = {this.props.name}
            >
            {this.props.value}
            </div>
        );
    }
}

export default Square;
