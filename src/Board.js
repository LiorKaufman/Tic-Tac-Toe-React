import React from 'react';
import './App.css';
import Square from './Square'
class Board extends React.Component {

    renderSquare = (i) => {
        return (
            <Square
            onClick = {this.props.onClick}
            value = {this.props.squares[i]}
            />
        )
    }

    render(){
        return (
            <div>
            <div className ='d-flex flex-wrap justify-contenet-center'>
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
            </div>
            <div className ='d-flex flex-wrap justify-contenet-center'>
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
            </div>
            <div className ='d-flex flex-wrap justify-contenet-center'>
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
            </div>
            </div>
        );
    }
}

export default Board;
