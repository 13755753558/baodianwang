import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

//引入主要路由页面
import Home from './page/home/Home';
import Project from './page/project/Project';
import Mine from './page/mine/Mine.jsx';
import Login from './page/login/Login.jsx';
import Find from './page/find/Find';
import Judetail from './page/judetail/Judetail'
import Gooddetail from './page/gooddetail/Gooddetail'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/project" component={Project} />
                    <Route path="/find" component={Find} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/login" component={Login} />
                    <Route path="/judetail/:id" component={Judetail} />
                    <Route path="/gooddetail/:id" component={Gooddetail} />
                    <Redirect from="/" to="/home" exact/>
                </Switch>
            </div>
        );
    }
}

export default App;
