import{React, useState} from 'react'
import './App.css'

function Square({ value, onClick ,boxval}) {
    return <button onClick={onClick}>{value}</button>;
}
  





function App() {
  const [boxval, setBoxval] = useState(Array(9).fill(null));
  const [Nextp, setNextp] = useState(true);
  
  function clickHandle(i) {
    const boxcopy = boxval.slice();

    if (calcluateWinner(boxval) || boxval[i]) {
      setBoxval(Array(9).fill(null));
      return;
    }

    if (Nextp&&boxcopy[i]==null) {
      boxcopy[i] = 'X';
    } else if(boxcopy[i]==null) {
      boxcopy[i] = 'O';
    }
    
    setBoxval(boxcopy);

    setNextp(!Nextp);
  }

  let nextplayer = '';
  Nextp ? nextplayer = 'X' : nextplayer = 'O';
  let winner = calcluateWinner(boxval);

  return (
    <div className="board">
      <h1>Tic-Tac-Toe</h1>
      <h5>
        {calcluateWinner(boxval)
          ? `Winner is ${winner}`
          : `Next player :${nextplayer}`}
      </h5>
      <div className="row">
        <Square
          value={boxval[0]}
          onClick={() => clickHandle(0)}
          boxval={boxval}
        />
        <Square
          value={boxval[1]}
          onClick={() => clickHandle(1)}
          boxval={boxval}
        />
        <Square
          value={boxval[2]}
          onClick={() => clickHandle(2)}
          boxval={boxval}
        />
      </div>
      <div className="row">
        <Square
          value={boxval[3]}
          onClick={() => clickHandle(3)}
          boxval={boxval}
        />
        <Square
          value={boxval[4]}
          onClick={() => clickHandle(4)}
          boxval={boxval}
        />
        <Square
          value={boxval[5]}
          onClick={() => clickHandle(5)}
          boxval={boxval}
        />
      </div>
      <div className="row">
        <Square
          value={boxval[6]}
          onClick={() => clickHandle(6)}
          boxval={boxval}
        />
        <Square
          value={boxval[7]}
          onClick={() => clickHandle(7)}
          boxval={boxval}
        />
        <Square
          value={boxval[8]}
          onClick={() => clickHandle(8)}
          boxval={boxval}
        />
      </div>
    </div>
  );
}

function calcluateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

  }
  return false
  
}

export default App