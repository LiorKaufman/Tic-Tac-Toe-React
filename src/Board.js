import React,{useState} from 'react';
import './App.css';
import Square from './Square'
class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null)
    }
  }
    renderSquare = (i) => {
        return (
            <Square
            onClick = {this.props.onClick}
            value = {this.props.squares[i]}
            name = {i}
            />
        )
    }

    render(){
      const board = this.state.board

        return (

            <div className="board-wrap">
            {board.map((e,i) =>{
              e = this.renderSquare(i)
                return( <div key={i}>
                        {e}
                      </div>)
            })
              }
            </div>
        );
    }
}

export default Board;
