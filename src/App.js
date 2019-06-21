import React from 'react';
import './App.css';
import Board from './Board'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(""),
            userTurn: true,
            message: "",
            gameStatus: false,
            gameTurn: 0,
            history: Array(9).fill(""),
            allHistory: [Array(9).fill("")]

        }
    }
    // history should contain an array with other array inside of it
    // each inside array will be a turn
    handleClick = (e) => {
        this.setState({gameStatus:true})
        const turn = this.state.gameTurn
        const index = e.target.getAttribute('name')
        const value = e.target.innerHTML
        const history = this.state.history
        const allHistory = [...this.state.allHistory]
        const squares = this.state.squares
        const user = this.state.userTurn
        for (let i = 0; i < squares.length; i++) {
                history[i] = squares[i]

        }
        this.setState({history:history})
        allHistory.push(history)

        if (value === "") {
            squares[index] = user ? 'X':'O'
            this.setState({
                squares:squares,
                userTurn: !user,
                gameTurn: turn + 1,
                allHistory: allHistory
            })
        }
            this.checkWin()
    }

    resetGame = () => {
        const squares = Array(9).fill("")
        const gameStatus = false
        const message = ""
        this.setState({
            squares:squares,
            gameStatus: false,
            message: message,
            gameTurn: 0,
        })
    }
    undoMove = () => {
        const lastMove = this.state.history
        const turn = this.state.gameTurn
        const user = this.state.userTurn
        // const allMoves = this.state.allHistory

        // if (turn > 0) {
        //     this.setState({gameTurn: turn -1,})
        // } else {
        //     this.setState({gameTurn:0})
        // }
        this.setState({
            squares:lastMove,
            userTurn: !user,
        })
        const squares = this.state.squares
        this.setState({history:squares})
    }

    goTo = () => {
        const allHistory = this.state.allHistory
    }

    checkWin = () => {
        const user = this.state.userTurn
        const squares = this.state.squares
        var winCombos  =        [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for (var i = 0; i < winCombos.length; i++) {
            const [a,b,c] = winCombos[i]
            if (squares[a] !== ""
            && squares[a] === squares[b]
            && squares[b] === squares[c]
            && user
            ) {
                this.setState({message:"player 1 won"})
            } else if (squares[a] !== ""
            && squares[a] === squares[b]
            && squares[b] === squares[c]
            ) {
                this.setState({message:"player 2 won"})
            }
        }
    }

    render(){
        const allHistory = this.state.allHistory
        const moves = allHistory.map((step,move) => {
            return <li key={move}>
            <button onClick={() => this.goTo} >{step}</button>
                </li>
        })
        return (
            <div className='d-flex justify-content-center'>
                <Board
                onClick = {this.handleClick}
                squares = {this.state.squares}
                />
                <p>{"Winner: " + this.state.message}</p>
                <br></br>
                <p>{" Game turn: " + this.state.gameTurn}</p>
                {this.state.gameStatus && <button onClick={this.resetGame}>Reset Game </button>}

                <ul>
                    <li><button onClick={() => this.undoMove()}> Undo Last Move </button></li>

                </ul>
            </div>

        );
    }
}

export default App;
