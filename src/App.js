import './App.css';
import Balance from './component/Balance';
import Header from './component/Header';
import Income from './component/Income';
import Transaction from './component/Transaction';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
      </div>
    </div>
  );
}

export default App;