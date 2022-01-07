import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  const [Show,setShow]=useState(true);

  return (
    <div className="App" style={{border:"2px solid red"}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="acc" onClick={()=>{setShow(!Show)}}>
        <div className="title">This is my first accordian</div>
        {Show && <div >Hi, I'm Gagan graduated from iit indore and i am currently open to SDE roles in fast paced and challenging environment.</div>}
      </div>
    </div>
  );
}

export default App;
