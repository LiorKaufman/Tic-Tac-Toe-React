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
            allHistory: [["","","","","","","","","",],]

        }
    }
    // history should contain an array with other array inside of it
    // each inside array will be a turn
    handleClick = (e) => {
        this.setState({gameStatus:true})
        const turn = this.state.gameTurn
        const index = e.target.getAttribute('name')
        const value = e.target.innerHTML
        const squares = this.state.squares
        const user = this.state.userTurn
        if (value === "") {
            squares[index] = user ? 'X':'O'
            this.setState({
                squares:squares,
                userTurn: !user,
                gameTurn: turn + 1,
            })

        }
        let all = this.state.allHistory
        all.push([].concat(this.state.squares))
        this.setState({allHistory:all})
        console.log(this.state.allHistory);
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
            userTurn: true,
            allHistory: [squares,]
        })
    }
    undoMove = () => {
      const allHistory = this.state.allHistory
      const squares = this.state.squares
      const gameTurn = this.state.gameTurn
      const userTurn = this.state.userTurn
      if (gameTurn > 1) {
        this.setState({
          squares:allHistory[gameTurn-1],
          gameTurn: gameTurn -1,
          userTurn: !userTurn,
          allHistory: allHistory.slice(0,gameTurn)
        })
      } else if (gameTurn === 1) {
        this.resetGame()
      }
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
                    {this.state.gameTurn > 0 && <li><button onClick={() => this.undoMove()}> Undo Last Move </button></li>}

                </ul>
            </div>

        );
    }
}

export default App;
