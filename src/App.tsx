import { useState } from "react";

import "./App.css";

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function MyButton({ count, onClick }: MyButtonProps): JSX.Element {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  function handleClick(): void {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
