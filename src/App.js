import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
//
import JsonPlaceHolder from './components/JsonPlaceHolder';
import '../src/index.css';

function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <li>
              <Link to='/'>Matchematica</Link>
            </li>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={HomePage} />{' '}
        </Switch>
      </Router>
      <div></div>
      <JsonPlaceHolder />
    </>
  );
}

export default App;
