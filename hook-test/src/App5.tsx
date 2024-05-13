import { useRef } from "react";
import { useEffect } from "react";
import React from "react";

const Input: React.ForwardRefRenderFunction<HTMLInputElement> = (
  props,
  ref
) => {
  return (
    <div>
      <input ref={ref}></input>
    </div>
  );
};

const WrapedInput = React.forwardRef(Input);

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.focus();
  }, []);

  return (
    <div className="App">
      <WrapedInput ref={ref} />
    </div>
  );
}

export default App;
