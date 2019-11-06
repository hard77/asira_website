import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import History from './components/history'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import scrollToTop from './components/scrollToTop';

class App extends React.Component {
  render(){
    return (
    <div className="app">
      <scrollToTop>
          <Header/>
            <Switch>
              <Route path='/' component={Home} exact></Route>
            </Switch>
          <Footer/>
      </scrollToTop>
        
    </div>
  );
}}

export default App;
