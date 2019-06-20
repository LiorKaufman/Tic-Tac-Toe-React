import React from 'react';
import './App.css';
import Board from './Board'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            userTurn: true,
        }
    }
    // setUserTurn = () => {
    //     let x = this.state.userTurn
    //     this.setState({userTurn:!x})
    // }
    handleClick (i) {
        const squares = this.state.squares
        const user = this.state.userTurn
        squares[i] = user? 'X':'O'
        this.setState({squares:squares})
        // let turn   = this.state.userTurn
        // let user1  = this.state.user1
        // let user2  = this.state.user2
        // let newArr = this.state.symbol
        // let index = e.target.getAttribute('name')
        // let value = e.target.innerHTML
        // if (value === "") {
            // if (turn) {
                // newArr[index] = user1

            // } else {
                // newArr[index] = user2
            // }
            // this.setUserTurn()
            // this.setState({symbol: newArr})
            // this.checkWin()
        }

    // checkWin = () => {
    //     let x = this.state.userTurn
    //     let gameBoard = this.state.symbol
    //     var winCombos  =        [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    //     for (var i = 0; i < winCombos.length; i++) {
    //
    //         const [a,b,c] = winCombos[i]
    //
    //         if (gameBoard[a] !== ""
    //         && gameBoard[a] === gameBoard[b]
    //         && gameBoard[b] === gameBoard[c]
    //         && x
    //         ) {
    //             this.setState({message:"player 1 won"})
    //             this.setState({gameState:false})
    //
    //         } else if (gameBoard[a] !== ""
    //         && gameBoard[a] === gameBoard[b]
    //         && gameBoard[b] === gameBoard[c]
    //         ) {
    //
    //             this.setState({message:"player 2 won"})
    //             this.setState({gameState:false})
    //         }
    //     }
    // }
    render(){
        return (
            <div className='d-flex justify-content-center'>
                <Board
                onClick = {(i) => this.handleClick(i)}
                squares = {this.state.squares}
                />
            </div>
        );
    }
}

export default App;
