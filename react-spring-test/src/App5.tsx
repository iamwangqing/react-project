import { useSprings, animated } from "@react-spring/web";

import "./App.css";

const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Viewpager() {
  const width = window.innerWidth;

  const [props, api] = useSprings(pages.length, (i) => ({
    x: i * width,
    scale: 1,
  }));

  return (
    <div className="wrapper">
      {props.map(({ x, scale }, i) => (
        <animated.div className="page" key={i} style={{ x }}>
          <animated.div
            style={{ scale, backgroundImage: `url(${pages[i]})` }}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default Viewpager;
