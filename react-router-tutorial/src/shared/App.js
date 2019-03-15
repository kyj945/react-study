import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { Home, About, Body1, Body2, Body3 } from 'pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu/>
          <Route exact path = "/" component={Home}/>
          <Route path = "/about" component={About}/>
          <Route path = "/body1" component={Body1}/>
          <Route path = "/body2" component={Body2}/>
          <Route path = "/body3" component={Body3}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
