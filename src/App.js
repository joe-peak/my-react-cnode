import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter ,Switch, Link} from 'react-router-dom';
import IndexList from '@/containers/IndexList';

import 'components/Indexlist/index.less';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={IndexList}></Route>
                <Route path="/test" render={ props => {
                    return (
                        <div>
                            <Link to="/">返回首页</Link>
                        </div>
                    );
                }}></Route>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
