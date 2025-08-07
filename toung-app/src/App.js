import logo from './d.png';
import './App.css';
import Hello from './Hello';
import Goodbye from './goodbye';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello />  {/* ใช้ Hello component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye />
      <JSXExamples />
    </div>
  );
}

export default App;
