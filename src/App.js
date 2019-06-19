import React from 'react';
import './App.css';
import Board from './Board'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user1: "x",
            user2: "o",
            userTurn: true,
            gameState: false,
        }
    }
    setUserTurn = () => {
        let x = this.state.userTurn
        this.setState({userTurn:!x})
    }
    render(){
        return (
            <div>
                <Board
                user1       = { this.state.user1 }
                user2       = { this.state.user2 }
                userTurn    = { this.state.userTurn }
                setUserTurn = { this.setUserTurn }
                />

                <button
                onClick = { this.resetGame }
                >
                Reset
                </button>
            </div>
        );
    }
}

export default App;
