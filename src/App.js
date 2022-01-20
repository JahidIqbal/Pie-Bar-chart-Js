import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Navbar />

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
