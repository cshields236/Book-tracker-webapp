import './App.css';
import AddBook from './Components/AddBook/AddBook';
import Card from './Components/Card/Card';
import Toolbar from './Components/Toolbar/Toolbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Toolbar />
          <Route path='/' exact component={Card} />
          <Route path='/add' exact component={AddBook} />
        </Router>
      </div>

    );
  }
}

export default App;
