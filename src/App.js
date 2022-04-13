import './App.css';
import Balance from './component/Balance';
import Header from './component/Header';
import Income from './component/Income';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <div>
        <Income />
      </div>
    </div>
  );
}

export default App;