import { NavLink} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
function App() {




  return (
    <div className="App">
      <NavLink to='/test'>TEST</NavLink>
      <NavLink to='/'>HOME</NavLink>
      <Home />
    </div>
  )
}

export default App;
