import React from 'react';
import './App.css';
import Square from './Square'
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theBoard: [],
        }
    }

    addSymbol = (e) => {
        // console.log(`${e.target.getAttribute('id')}`);
        console.log(e.target.getAttribute('name'));
        let x = this.props.userTurn
        if (e.target.innerHTML !== "") {

        } else if (x) {
            e.target.innerHTML = this.props.user1
            this.props.setUserTurn()
        } else if (!x) {
            e.target.innerHTML = this.props.user2
            this.props.setUserTurn(e)
        }
    }
    popArray = () => {
        let newArr = this.state.theBoard
        for (let i = 0; i <9; i++) {
            newArr.push(<Square
                        addSymbol = { this.addSymbol }
                        key       = { i }
                        id        = { i }
                        />)
        }
        this.setState({theBoard:newArr})
    }
    // var winCombos  =    [[0,1,2],[3,4,5][6,7,8],[0,3,6],[1,4,7],[2,5,8][0,4,8][2,4,6]]
    componentDidMount() {
        this.popArray()
    }
    render(){
        return (
            <div className='board-wrap'>
                {this.state.theBoard}
            </div>
        );
    }
}

export default Board;
