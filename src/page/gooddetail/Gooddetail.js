import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../../sass/gooddetail.scss';

//引入axios请求数据
import axios from 'axios';
class Gooddetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            gooddata:{},
            value:1
        }
        this.decrease = this.decrease.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increase = this.increase.bind(this)
    }
    //数量增加函数
    increase(){
        let value = this.state.value;
        if(value<10){
            value++;
            this.setState({value});
        }else{
            this.setState({value:10});
        }
    }
    //数量减少函数
    decrease(){
        let value = this.state.value;
        if(value>1){
            value--;
            this.setState({value});
        }else{
            this.setState({value:1});
        }
    }
    //监听输入框值的变化
    handleChange(e){
        if(!isNaN(e.target.value) && (e.target.value>=1) && (e.target.value<=99)){
            this.setState({ 
                value:e.target.value 
            })
        }
    }
    componentDidMount(){
        //console.log(this.props.match.params.id);
        let goodid = this.props.match.params.id
        let goodurl = 'mobile_api/api/userVip/goodsDetail?product_id='+goodid;
        axios.get(goodurl).then(response => {
            // console.log(response);
            let gooddata = response.data.data;
            this.setState({
                gooddata
            })
        }).catch(error => { 
            console.log(error); 
        })

    }

    render(){
        // console.log(this.state.gooddata);
        return (
            <div className="gooddetail">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    >{this.state.gooddata.product_name}
                </NavBar>
                <div className="goodsTop">
                    <div className="goodsImg">
                        <img src={this.state.gooddata.image} className="productImg" alt="" />
                    </div>
                    <div className="proTitle">
                        <p className="titleTop">
                            <span className="titieTxt">{this.state.gooddata.product_name}</span>
                        </p>
                        <p className="titleBottom">
                            <span className="priceTxt">{this.state.gooddata.price}点币</span>
                        </p>
                    </div>
                </div>
                <div className="propertyDiv">
                    <p className="num1">数目：
                        <span className="num2">1</span>
                    </p>
                    <p className="numSelect">
                        <span className="numBorder" onClick={this.decrease}>-</span>
                        <input type="text" className="productNum" value={this.state.value} onChange={this.handleChange}/>
                        <span className="numBorder" onClick={this.increase}>+</span>
                        <span className="limitTxt">每人每天限购{this.state.gooddata.cash_limit_num}件</span>
                        <span className="limitTxt">剩余数量{this.state.gooddata.cash_limit_num}件</span>
                    </p>
                </div>
                <div className="detailImg">
                    <p className="infoTitle">商品详情</p>
                    <div className="infoContent" dangerouslySetInnerHTML = {{ __html: this.state.gooddata.product_info}}></div>
                </div>
                <div className="Bottonlast">
                    <p>立即兑换</p>
                </div>
            </div>
        )
    }
}

export default Gooddetail;