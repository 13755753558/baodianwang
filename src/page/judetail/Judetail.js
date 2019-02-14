import React,{Component} from 'react';
import '../../sass/judetail.scss'
import { NavBar, Icon} from 'antd-mobile';
import Jusuan from './Jusuan.jsx';

//引入axios
import axios from 'axios';

class Judetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            judata:{},
            juprogram:[
                {title:'产品详情',imgurl:'https://mobile.bao.cn/static/media/icon-01.98125c38.png'},
                {title:'标的详情',imgurl:'https://mobile.bao.cn/static/media/icon-02.9116ed96.png'},
                {title:'加入记录',imgurl:'https://mobile.bao.cn/static/media/icon-03.6376a9f6.png'},
                {title:'常见问题',imgurl:'https://mobile.bao.cn/static/media/icon-04.030b2889.png'}
            ]
        }
    }
    componentDidMount(){
        //console.log(this.props.match.params.id);
        let juid = this.props.match.params.id
        let judianurl = 'mobile_api/api/depositSupervise/projectDetail/'+juid;
        axios.get(judianurl).then(response => {
            //console.log(response);
            let judata = response.data.data;
            //console.log(judata)
            this.setState({
                judata
            })
        }).catch(error => { 
            console.log(error); 
        })

    }
    render(){
        let jumoney = 10000*3*this.state.judata.rate/1200
        //console.log(jumoney);
        return(
            <div className="judetail">
                <div className="jnarbar">
                    <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    >聚点+详情</NavBar>
                </div>
                <div className="juheader">
                    <p className="juhuibao">参考年回报率(%)</p>
                    <p className="huibaollv">
                        <span>{this.state.judata.rate}</span>
                    </p>
                    <div className="juhuibaox">
                        <span>
                            <p className="juhuibaoxa">起投金额</p>
                            <p>1000.00</p>
                        </span>
                        <span>
                            <p className="juhuibaoxa">锁定时间</p>
                            <p>{this.state.judata.month}个月</p>
                        </span>
                    </div>
                </div>
                <div className="depositBox___3W0pR">
                    <div className="profit___27atc">
                        <p>收益估算</p>
                    </div>
                    <div className="profitContent____gsW2">
                        <p className="profitText___3Nr1w">出借10000元，3个月后到期预期可赚</p>
                        <p className="profitText1___YznYQ">具体收益以实际到账为准</p>
                        <p className="profitNum___3u538">{jumoney}
                            <span>元</span>
                        </p>
                    </div>
                </div>
                <div className="depositBox___3W0pR pdAll___1ulsI">
                    <ul className="iconUl___M6ohw">
                        {this.state.juprogram.map(item =>{
                            return(
                                <li key={item.title}>
                                    <span>
                                        <img src={item.imgurl} alt="" />
                                    </span>
                                    <span>{item.title}</span>
                                </li>
                                ) 
                            })
                        }
                    </ul>
                </div>
                <div className="depositBox___3W0pR pdAll1___1FTYt">
                    累计加入{this.state.judata.buy_total}人
                </div>
                <div className="jubottom">
                    <Jusuan rate={this.state.judata.rate}/>        
                    <button>马上出借</button>
                </div>
            </div>
        )
    }
}

export default Judetail;