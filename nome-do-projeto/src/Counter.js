import React from 'react';

function Counter ({count, onIncrement}) {
    return (
        <div>
            <p> Contador : {count}</p>
            <button onClick={onIncrement}>Incrementar</button>
        </div>
    );
}
export default Counter;