import { useState } from "react";

function Square({ value, onSquareClick }) {
    return <button onClick={onSquareClick}>{value}</button>;
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext == true) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="text-center text-xl mb-2 font-bold">
                Tic-Tac-Toe Game
            </div>
            <div className="border-2 border-bg grid grid-cols-3 grid-rows-3 w-36 h-36 font-bold text-3xl mx-auto">
                <Square
                    value={squares[0]}
                    onSquareClick={() => {
                        handleClick(0);
                    }}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => {
                        handleClick(1);
                    }}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => {
                        handleClick(2);
                    }}
                />
                <Square
                    value={squares[3]}
                    onSquareClick={() => {
                        handleClick(3);
                    }}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => {
                        handleClick(4);
                    }}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => {
                        handleClick(5);
                    }}
                />
                <Square
                    value={squares[6]}
                    onSquareClick={() => {
                        handleClick(6);
                    }}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => {
                        handleClick(7);
                    }}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => {
                        handleClick(8);
                    }}
                />
            </div>
            <div className="text-center font-bold text-lg mt-2">{status}</div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        //
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return <li onClick={() => jumpTo(move)}>{description}</li>;
    });

    return (
        <div className="bg-text p-2 mb-2 w-1/2 mx-auto rounded-xl text-bg">
            <div>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <p className="text-lg">Game History:</p>
                <ol className="list-inside list-decimal">{moves}</ol>
            </div>
        </div>
    );
}
