import './App.css';
import data from './data/data';
// import Accordian from './components/accordian';
import { useState,useEffect } from 'react';

function App() {
  const [active,setActive]=useState([]);

  useEffect(()=>{
    const array=[];
    for (let i=0;i<data.length;i++){
      array.push(false)
    }
    setActive(array)
  },[])

  const changeState=(index)=>{
    const array=[];
    for (let i=0;i<data.length;i++){
      if (i===index){
        array.push(!active[index])
      } else {
        array.push(false)
      }
    }
    setActive(array);
  }


  return (
    <div className="App" style={{border:"2px solid black"}}>
      {data.map((Acc,index)=>{
        return (
          <div className="accordian" style={{border:"2px solid red"}} onClick={()=>changeState(index)}>
            <div className="header">
                {Acc.title}
            </div>
            {active[index] && <div className="content">
                {Acc.body}
            </div>}
        </div>
        )
      })}
    </div>
  );
}

export default App;
