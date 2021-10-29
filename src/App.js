import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Details from './components/Details/Details';



import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
      <Switch>

        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/home" >
          <Home />
        </Route>
        
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
