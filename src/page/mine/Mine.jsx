import React,{Component} from 'react';
import BottomBar from '../../components/BottomBar';
import '../../sass/mine.scss';


class Mine extends Component{
    render(){
        return (
            <div className="page mine">
                <div className="minemain">
                    <div className="miheader">
                        <div className="headerline">
                            <div className="headerleft">
                                <img className="avatarImg" src="https://mobile.bao.cn/static/media/avatar.b1cf841a.png" alt="" />
                                <span className="miuserName">15626146966</span>
                                <img className="vipImg" src="https://mobile.bao.cn/static/media/normal.8b981e4f.png" alt="" />
                            </div>
                            <div className="headerright">
                                <img className="serviceImg" src="/static/media/servise.68c9ad34.png" alt="" />
                                <img className="settingImg" src="/static/media/setting_button.5d18b787.png" alt="" />
                            </div>
                        </div>
                        <div className="miamount">0</div>
                        <div className="miamountText">总资产(元)</div>
                        <div className="mitextBox">
                            <img src="https://mobile.bao.cn/static/media/product.0c30d3f9.png" alt="" />
                            账户安全保障中
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

export default Mine;