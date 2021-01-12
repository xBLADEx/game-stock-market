import { useState } from 'react';
import ButtonAction from './components/button-action';
import ButtonGrid from './components/button-grid';
import ButtonNumber from './components/button-number';
import Header from './components/header/header';
import History from './components/history';
import Total from './components/total';

function App() {
  const resetHistory = ['0'];
  const [history, setHistory] = useState(resetHistory);
  const [total, setTotal] = useState(0);
  const insertNumber = (e, number) => {
    e.preventDefault();

    if (history[0] === '0') {
      setHistory([number]);
    } else {
      setHistory([...history, number]);
    }
  };
  const numbers = () => {
    const build = [];
    for (let i = 1; i <= 12; i++) {
      build.push(<ButtonNumber key={i} number={`${i}`} clicked={(e) => insertNumber(e, i)} />);
    }
    return build;
  };

  const double = () => {
    const math = Number(total) * 2;

    setTotal(math);
    setHistory(resetHistory);
  };

  const add = () => {
    const math = Number(total) + Number(history.join(''));

    setTotal(math);
    setHistory(resetHistory);
  };

  const subtract = () => {
    const math = Number(total) - Number(history.join(''));

    setTotal(math);
    setHistory(resetHistory);
  };

  const clear = () => {
    setHistory(resetHistory);
  };

  const end = () => {
    setTotal(0);
    setHistory(resetHistory);
  };

  return (
    <main>
      <Header />
      <Total total={total} />
      <History history={history} />
      <ButtonGrid>
        <div className="numbers">
          {numbers().map((item) => item)}
          <ButtonNumber className="two" number={'0'} clicked={(e) => insertNumber(e, 0)} />
        </div>
        <div className="actions">
          <ButtonAction className="green" type={double} name="x2" />
          <ButtonAction className="green" type={add} name="+" />
          <ButtonAction className="red" type={subtract} name="-" />
          <ButtonAction type={clear} name="C" />
          <ButtonAction className="red" type={end} name="End" />
        </div>
      </ButtonGrid>
    </main>
  );
}

export default App;
