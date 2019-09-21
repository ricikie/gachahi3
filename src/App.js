import React, { Component, Fragment } from 'react';

import Modals from './Components/modals';
import Header from './Components/header';
import Pages from './Components/pages';
import Footer from './Components/footer';


import './resources/css/gacha-style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route : 'home',
      activeTab : 'home',
      view : "info",
    }
  }

  onRoute = (route) => {
    this.setState({ route : route, activeTab : route });
  }

  setView = (pick) => {
    this.setState({view : pick});
  }

  render(){
    return(
      <Fragment>
            <Header
              onRoute = {this.onRoute}
              activeTab = {this.state.activeTab}
            />
            <Modals
              onRoute = {this.onRoute}
            />
            <Pages
              onRoute = {this.onRoute}
              setView = {this.setView}
              activeView = {this.state.view}
              activeTab = {this.state.activeTab}        
            />
            <Footer/>
      </Fragment>
    );
  }

}
export default App;


