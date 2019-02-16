import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { PullToRefresh } from 'antd-mobile';

//使用axios请求数据
import axios from 'axios';

//请求数据方法
// function genData() {
//     const dataArr = [];
//     for (let i = 0; i < 20; i++) {
//         dataArr.push(i);
//     }
//     return dataArr;
//     }


class Zhaiquan extends Component {
    constructor(props) {
        super(props);
        this.pageNo = 0 ;//定义分页信息
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            page: 0
        };
        this.loadData = this.loadData.bind(this)
    }

    loadData () {
        let page = ++this.state.page;
        axios({
            method: 'get',
            url: 'mobile_api/api/depositSupervise/zhixProjectLists',
            data: {
                page
            }
        }).then(res=> {
            console.log(res);
            let data = res.data.data;
            
            this.setState({
                data
            })
        })
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.loadData()
        this.setState({
            height: hei
        })
    }

    render() {
        return (<div>
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    height: '11rem',
                    overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                // direction={this.state.down}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    this.loadData()
                }}
            >
                {this.state.data.map(item=>{
                 return(
                    <div className="programone" key={item.id}>
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
                                剩余金额：{item.money}
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
                            <p className="cellFootlb">期限{item.month.month}个月</p>
                        </div>
                    </div>
                </div>
                )})}
            </PullToRefresh>
        </div>
        );
    }
}

export default Zhaiquan;