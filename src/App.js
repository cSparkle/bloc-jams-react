import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='navbar'>
          <Link className='nav-link' to='/'><h1 className='ion-md-microphone'> Bloc Jams</h1></Link>
          <nav className='d-flex'>
            <Link className='nav-link px-3' to='/'>Home</Link>
            <Link className='nav-link px-3' to='/library'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
