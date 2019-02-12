import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../../sass/gooddetail.scss';

class Gooddetail extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    onChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <div className="gooddetail">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    >宝点移动电源充电宝
                </NavBar>
                <div className="goodsTop">
                    <div className="goodsImg">
                        <img src="https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180404/201804040300105813.jpg" className="productImg" alt="" />
                    </div>
                    <div className="proTitle">
                        <p className="titleTop">
                            <span className="titieTxt">宝点移动电源充电宝</span>
                        </p>
                        <p className="titleBottom">
                            <span className="priceTxt">14999点币</span>
                        </p>
                    </div>
                </div>
                <div className="propertyDiv">
                    <div className="propertyItem">
                        <p className="numf">型号：
                            <span className="nums">选择</span>
                        </p>
                        <p className="propertyValue">
                            <span>10000mAh</span>
                        </p>
                    </div>
                    <p className="num1">数目：
                        <span className="num2">1</span>
                    </p>
                    <p className="numSelect">
                        <span className="numBorder">-</span>
                        <input type="text" className="productNum" value="1" onChange={this.onChange} />
                        <span className="numBorder">+</span>
                        <span className="limitTxt">每人每天限购2件</span>
                        <span className="limitTxt">剩余数量0件</span>
                    </p>
                </div>
                <div className="detailImg">
                </div>
            </div>
        )
    }
}

export default Gooddetail;