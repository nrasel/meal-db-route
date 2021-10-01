import './App.css';
import Restaurent from './components/Restaurent/Restaurent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Culture from './components/Culture/Culture';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/restaurent">
            <Restaurent />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path='/'>
            <Restaurent />
          </Route>
          <Route exact path="/meal/:mealdb">
            <MealDetails />
          </Route>
          <Route exact path="/about/culture">
            <Culture />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
