import { useState, useEffect } from 'react';

export default function CounterByHook() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleButtonIicrementA = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleButtonIicrementB = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    console.log('tern on the useEffect');
  }, [counterA]);

  return (
    <div>
      <button type="button" onClick={handleButtonIicrementA}>
        Push A {counterA}
      </button>
      <button type="button" onClick={handleButtonIicrementB}>
        Push B {counterB}
      </button>
    </div>
  );
}
