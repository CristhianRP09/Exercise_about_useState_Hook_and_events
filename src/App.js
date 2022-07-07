import logo from './logo.svg';
import './App.css';
import { Ejercicio1 } from './components/Ejercicio1';

function App() {

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='title'>El estado en React - Hook useState</div>
      </header>
      <hr />
      {/* gege */}
      <Ejercicio1 currentYear={currentYear} />
    </div>
  );
}

export default App;
