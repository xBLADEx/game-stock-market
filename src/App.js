import ButtonAction from './components/button-action';
import ButtonGrid from './components/button-grid';
import ButtonNumber from './components/button-number';
import Header from './components/header/header';
import History from './components/history';
import Total from './components/total';

function App() {
  const numbers = () => {
    const build = [];
    for (let i = 1; i <= 12; i++) {
      build.push(<ButtonNumber key={i} number={i} />);
    }
    return build;
  };

  const double = () => {};
  const add = () => {};
  const subtract = () => {};
  const clear = () => {};
  const end = () => {};

  return (
    <main>
      <Header />
      <Total />
      <History history="0" />
      <ButtonGrid>
        <div className="numbers">
          {numbers().map((item) => item)}
          <ButtonNumber className="two" number={0} />
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
