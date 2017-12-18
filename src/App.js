import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter ,Switch, Link} from 'react-router-dom';
import IndexList from '@/containers/IndexList';
import './index.less';
import 'components/Indexlist/index.less';
import 'components/Common/index.less';
import { Footer , Loading} from 'components/Common';

class App extends Component {
  render() {
    const { isFetching } = this.props.IndexList;
    return (
        <div  className='box'>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={IndexList}></Route>
                    <Route path="/test"  render={ () => { return (<div>Hahah <Link to="/">Go Home</Link></div>);}}></Route>
                </Switch>
            </BrowserRouter>
            {
                isFetching && <Loading/>
            }

            {
                !isFetching && <Footer/>
            }
        </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
