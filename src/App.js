import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import ScrollToTop from './components/scrollToTop'

class App extends React.Component {
  render(){
    return (
    <div className="app">
      <ScrollToTop>
          <Header/>
            <Switch>
              <Route path='/' component={Home} exact></Route>
            </Switch>
          <Footer/>
      </ScrollToTop>
        
    </div>
  );
}}

export default App;
