import React,{Component} from 'react';

//使用axios请求数据
import axios from 'axios';

class Judian extends Component {
    constructor(props){
        super(props);
        this.state = {
            judianlist:[]
        }
    }
    componentDidMount() {
        let judianurl = 'mobile_api/api/depositSupervise/projectLists?page=1&pageSize=100000000';
        axios.get(judianurl).then(response => {
            // console.log(response);
            let judianlist = response.data.data;
            // console.log(judianlist)
            this.setState({
                judianlist
            })
        }).catch(error => { 
            console.log(error); 
        })
    }
    render() {
        let {func} = this.props
        return (
            <div className="judian">
                {this.state.judianlist.map((item,idx)=>{
                let percent = parseInt(item.has_money*100/item.money)
                return (
                    <div className="programone" key={idx} onClick={() => {
                        func(this.state.judianlist[idx].id)
                    }}>
                    <div className="cellHead">
                        <div>
                            <p>{item.title}</p>
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
                                <p>出借</p>
                            </div>
                        </div>
                    </div>
                    <div className="cellFoot">
                        <div className="cellFootl">
                            <p className="cellFootla">参考年回报率</p>
                            <p className="cellFootlb">期限{item.month}个月</p>
                        </div>
                        <div className="cellFootr">
                            <p>{percent}%</p>
                            <div>
                                <div style={{width:`${percent}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                )})}
                
            </div>
        );
    }
}

export default Judian;