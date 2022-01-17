import './App.css';
import data from './data/data';
import Accordian from './components/accordian';

function App() {

  return (
    <div className="App" style={{border:"2px solid black"}}>
      {data.map((Acc)=>{
        return (
          <Accordian content={Acc} />
        )
      })}
    </div>
  );
}

export default App;
