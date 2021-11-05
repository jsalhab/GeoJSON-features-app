import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Features from './components/features/Features';

function App() {
  return (
    <div className="App" data-test="app-component">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/features">
              <Features />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

