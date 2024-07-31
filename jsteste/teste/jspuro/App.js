import React, {useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>contador :{count}</h1>
       <button on onClick={()=> setCount(count +1)}>incrementar</button>
       <button on onClick={()=> setCount(count -1)}>decrementar</button>
       

    </div>
  )
}
export default App;
