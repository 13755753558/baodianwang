import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

//引入主要路由页面
import Home from './page/home/Home';
import Project from './page/project/Project';
import Mine from './page/mine/Mine';
import Find from './page/find/Find';
import Judetail from './page/judetail/Judetail'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/project" component={Project} />
                    <Route path="/find" component={Find} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/judetail/:id" component={Judetail} />
                    <Redirect from="/" to="/home" exact/>
                </Switch>
            </div>
        );
    }
}

export default App;
