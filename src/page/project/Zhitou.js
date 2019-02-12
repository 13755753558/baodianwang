import React, { Component } from 'react';

//使用axios请求数据
import axios from 'axios'

class Zhitou extends Component {
    constructor() {
        super();
        this.state = {
            zhitoulist:[]
        }
    }
    componentDidMount() {
        let zhitouurl = 'mobile_api/directInvest/projects?page=1';
        axios.get(zhitouurl) 
        .then(response => {
            // console.log(response);
            let zhitoulist = response.data.data;
            // console.log(zhitoulist)
            this.setState({
                zhitoulist
            })
        }) .catch(error=> { 
            console.log(error); 
        })
    }
    render() {
        return (
            <div className="judian">
                {this.state.zhitoulist.map(item=>{
                // let percent = parseInt(item.has_money*100/item.money)
                return (
                    <div className="programone" key={item.id}>
                    <div className="cellHead">
                        <div>
                            <p>{item.name}</p>
                        </div>
                    </div>
                    <div className="cellBody">
                        <div className="cellBodyl">
                            <p className="cellBodyla">
                                {item.rate}
                                <span>%</span>
                            </p>
                            <p className="cellBodylb">
                                剩余金额：{item.left_money}
                            </p>
                        </div>
                        <div className="cellBodyr">
                            <div className="canbuy">
                                <p>还款中</p>
                            </div>
                        </div>
                    </div>
                    <div className="cellFoot">
                        <div className="cellFootl">
                            <p className="cellFootla">参考年回报率</p>
                            <p className="cellFootlb">期限{item.term}个月</p>
                        </div>
                        {/* <div className="cellFootr">
                            <p>{percent}%</p>
                            <div>
                                <div style={{width:`${percent}%`}}></div>
                            </div>
                        </div> */}
                    </div>
                </div>
                )})}
                
            </div>
        );
    }
}        
export default Zhitou;