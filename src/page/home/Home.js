import React,{Component} from 'react';
// import {Route,Switch,Redirect} from 'react-router-dom';
import '../../sass/home.scss'

import BottomBar from '../../components/BottomBar'
import HomeBanner from './HomeBanner'


class Home extends Component{
    render(){
        return (
            <div className="page home">
                <div className="main">
                    <div className="homeone">
                        <span className="homeoneA"></span>
                        <span className="homeoneB">上客户端，领专属大礼包</span>
                        <div className="homeoneC">立即打开</div>
                    </div>
                    <HomeBanner />
                    <div className="homethr">
                        <ul className="homethrA">
                            <li className="thrli">
                                <img className="thrimg" src="https://mobile.bao.cn/static/media/left.0df07b83.png" alt=""/>
                                <span>银行存管</span>
                            </li>
                            <li className="thrli">
                                <img className="thrimg" src="https://mobile.bao.cn/static/media/middle.f8ca2838.png" alt=""/>
                                <span>互金会员</span>
                                <img className="thrimgl" src="https://mobile.bao.cn/static/media/line.ec91b2c9.png" alt=""/>
                                <img className="thrimgr" src="https://mobile.bao.cn/static/media/line.ec91b2c9.png" alt=""/>
                            </li>
                            <li className="thrli">
                                <img className="thrimg" src="https://mobile.bao.cn/static/media/right.d8bcfa88.png" alt=""/>
                                <span>邀请有礼</span>
                            </li>
                        </ul>
                    </div>
                    <a href="javascript" className="homefor">
                        <img className="homeforimg" src="https://mobile.bao.cn/static/media/newHand.6ee7a956.png" alt=""/>
                    </a>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Home;