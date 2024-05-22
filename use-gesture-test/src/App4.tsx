import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App4.css";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <CSSTransition in={flag} timeout={1000} appear={true}>
        <div id="box"></div>
      </CSSTransition>
      <button onClick={() => setFlag(!flag)}>{!flag ? "进入" : "离开"}</button>
    </div>
  );
}

export default App;
