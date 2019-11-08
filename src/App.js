import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import ScrollToTop from './components/scrollToTop'
import WOW from 'wow.js'
import TOP from './support/img/icons/top.svg'
class App extends React.Component {
  componentDidMount() {
    new WOW().init();
}
  render(){
    return (
    <div className="app">
      <ScrollToTop>
          <Header/>
            <Switch>
              <Route path='/' component={Home} exact></Route>
            </Switch>
              <div id="App" className="text-right pr-5 ">
                  <a href="#home">
                    <img src={TOP} className="wow infinite pulse" width="4%" alt="scrollTOP"></img>
                  </a>
              </div>
          <Footer/>
      </ScrollToTop>
        
    </div>
  );
}}

export default App;
