import './App.css';
import { useEffect, useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  
  const handleSetText = (e) => {
    setText(e.target.value);
  };

  useEffect( ()=>{
    console.log("업데이트:", count, text);
  },[count, text]);

  useEffect( ()=>{
    console.log("컴포넌트 마운트");
  },[]);

  return (
    <div className = "App">
      <h1>Simple Counter</h1>
      <section>
        <input onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count} />
        { count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
};

export default App;
