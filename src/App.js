import './App.css';
import TransaprentButton from './transparentButton';

function App() {
  return (
    <div className="App">
        <TransaprentButton buttonTitle='Click Me' onClick= {() => (alert("Hello! I am an alert box!!"))}
        />
    </div>
  );
}

export default App;
