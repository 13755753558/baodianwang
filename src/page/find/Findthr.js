import React,{Component} from 'react';

class Findthr extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="findcon findthr">
                <div className="findthrtop">
                    <span className="findthrtopcon">优享福利</span>
                </div>
                <ul className="findthrUl">
                    <a href="https://www.bao.cn/special/newHandActivities/index.html">
                        <li>
                            <img src="https://mobile.bao.cn/static/media/invite.e5d74879.png" alt=""/>
                            <div className="info___3Qfto">
                                <p className="topTxt___27Cgg">新手专享</p>
                                <p className="bottomTxt___10gQn">800元福利包</p>
                            </div>
                        </li>
                    </a>
                    <li className="findthrUlcen">
                        <span className="split___QiZK7"></span>
                    </li>
                    <a href="/find/inviteFriends">
                        <li>
                            <img src="/static/media/newHand.0890fc75.png" alt="" />
                            <div className="info___3Qfto">
                                <p className="topTxt___27Cgg">邀友返现</p>
                                <p className="bottomTxt___10gQn">邀请好友返现</p>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        )
    }
}

//暴露
export default Findthr;