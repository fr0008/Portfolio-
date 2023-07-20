import './App.css';
import Aboutcomponent from './components/About component/Aboutcomponent';
import Design from './components/Design Component/Design';
import Search from './components/search content/Search';

function App() {
  return (
    <div className="App">
  <Search/>
  <Aboutcomponent/>
  <Design/>
    </div>
  );
}

export default App;
