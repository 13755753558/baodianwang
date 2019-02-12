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
                    <div className="homefor">
                        <img className="homeforimg" src="https://mobile.bao.cn/static/media/newHand.6ee7a956.png" alt=""/>
                    </div>
                    <div className="homefiv">
                        <div className="homefivA">
                            <span>新手标</span>
                            <span className="homefivAa">每人限3次加入，累计限额1万</span>
                        </div>
                        <div className="homefivB">
                            <div className="homefivBa">新手专享</div>
                            <p className="homefivBb">
                                12.10
                                <span className="homefivBc">%</span>
                            </p>
                            <p className="homefivBd">
                                <span className="homefivBe">
                                    <span className="homefivBf">50</span>
                                    元起投
                                </span>
                                <span className="homefivBg">出借期限1个月</span>
                            </p>
                            <p className="homefivBh">
                                <span className="homefivBi">立即出借</span>
                            </p>
                        </div>
                    </div>
                    <div className="homesix">
                        <p className="homesixA">3月期聚点+3个月</p>
                        <div className="homesixB">
                            <div className="homesixBa">
                                <div className="homesixBaa">
                                    <p className="homesixBaaa">11.00
                                        <span className="homesixBaaaa">%</span>
                                    </p>
                                    <p className="homesixBaab">参考年回报率</p>
                                </div>
                            </div>
                            <div className="homesixBb">
                                <p className="homesixBba">起投
                                    <span className="homesixBbaa">1000</span>
                                    元
                                </p>
                                <p className="homesixBbb">到期还本付息</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Home;