import { useSpringValue, animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  // const width = useSpringValue(0, {
  //   config: {
  //     // duration: 2000,
  //     mass: 2,
  //     friction: 10,
  //     tension: 200,
  //   },
  // });

  const [styles, api] = useSpring(() => ({
    from: {
      width: 100,
      height: 100,
    },
    config: {
      mass: 2,
      friction: 10,
      tension: 400,
    },
  }));

  function clickHandler() {
    api.start({
      width: 200,
      height: 200,
    });
  }

  // useEffect(() => {
  //   width.start(300);
  // }, []);

  // return <animated.div className="box" style={{ width }}></animated.div>;
  return (
    <animated.div
      className="box"
      style={{ ...styles }}
      onClick={clickHandler}
    ></animated.div>
  );
}
