import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Setting, Posts} from 'pages';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (

      <div>
        <Menu/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/setting" component={Setting} />
        <Route path="/posts" component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
