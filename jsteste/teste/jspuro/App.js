import React, {useState} from 'react'
function App(){
    const [name, setName] = useState ('');
    const [submittedName, setSubmittedName ] = useState ('');
    

    const handlechange = (event) => {
        setName(event.target.value);

    };
    const handleSumit = (event) =>{
        event.preventDefault();
        setSubmittedName?(name);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name} 
            onChange={handleChange} 
          />
        </label>
        <button type="submit">Enviar</button>
            </form>
            {submittedName && <h2>Olá, {submittedName}!</h2>}
        </div>
    );

}
export default App;