import React,{Component} from 'react';
import BottomBar from '../../components/BottomBar';
import '../../sass/mine.scss';


class Mine extends Component{
    constructor(){
        super();
        this.state = {
            product:[
                {title:'优享+',imgurl:'https://mobile.bao.cn/static/media/optimal_enjoy.30202428.png',url:'https://mobile.bao.cn/user/youMy'},
                {title:'聚点+',imgurl:'https://mobile.bao.cn/static/media/accumulation_point.fa9e55f5.png',url:'https://mobile.bao.cn/user/gatherMy'},
                {title:'直投项目',imgurl:'https://mobile.bao.cn/static/media/direct_investment.4415f78e.png',url:'https://mobile.bao.cn/user/zt'},
                {title:'债权转让',imgurl:'https://mobile.bao.cn/static/media/bond_transfer.7af1ad57.png',url:'https://mobile.bao.cn/user/myTransferMain'},
            ],
            discount:[
                {title:'优惠券',imgurl:'https://mobile.bao.cn/static/media/coupons.0b232f4a.png',url:'https://mobile.bao.cn/user/couponMain'},
                {title:'红包',imgurl:'https://mobile.bao.cn/static/media/red_envelope.4add7b2e.png',url:'https://mobile.bao.cn/user/redPacket'},    
                {title:'优享+',imgurl:'https://mobile.bao.cn/static/media/friday_prize.9ea81b9f.png',url:'https://mobile.bao.cn/user/fridayActivity'}
            ]

        }
    }
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
                        <div className="tabs___38R4I">
                            <div className="tab___8v7Fh center___2cxrf">
                                <img src="https://mobile.bao.cn/static/media/loan_calendar.41d3db36.png" alt=""/>
                                <span>回款日历</span>
                            </div>
                            <div className="tab___8v7Fh">
                                <img src="https://mobile.bao.cn/static/media/deal_flow.6240c02c.png" alt=""/>
                                <span>交易流水</span>
                            </div>
                        </div>
                    </div>
                    <div className="myProduct___10rOO">
                        <div className="mpLeft___1evjj">
                            <p className="one___12g3J">可用余额 (元)</p>
                            <p className="two___2_eeu">0.00</p>
                        </div>
                        <div className="mpright___1b30E">
                            <span className="a___3lCoi">
                                <div className="rechange___2Lkzb">充值</div>
                            </span>
                            <span className="a___3lCoi">
                                <div className="withdrawals___3iVWp">提现</div>
                            </span>
                        </div>
                    </div>
                    <div className="functionBox">
                        <div className="boxtitle">我的产品</div>
                        <div className="box___OBBy">
                            {this.state.product.map(item =>{
                                return (
                                    <div className="item___3rTRC" key={item.title}>
                                        <a href={item.url}>
                                            <img src={item.imgurl} alt="" />
                                            <p>{item.title}</p>
                                        </a>
                                    </div>
                                )
                            })}                            
                        </div>
                    </div> 
                    <div className="functionBox">
                        <div className="boxtitle">我的优惠</div>
                        <div className="box___OBBy">
                            {this.state.discount.map(item =>{
                                return (
                                    <div className="item___3rTRC" key={item.title}>
                                        <a href={item.url}>
                                            <img src={item.imgurl} alt="" />
                                            <p>{item.title}</p>
                                        </a>
                                    </div>
                                )
                            })}                            
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