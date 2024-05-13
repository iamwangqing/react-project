import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Aaa() {
  const [count, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  const bbbCallback = useCallback(() => {}, []);

  const count2 = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: number;
  callback: Function;
}

function Bbb(props: BbbProps) {
  console.log("bbb render");

  return <h2>{props.count}</h2>;
}

const MemoBbb = memo(Bbb);

export default Aaa;
