import React, { Component } from 'react';

class Judiantop extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="judiantop">
                <div className="judiantopA">
                    <img src="https://mobile.bao.cn/static/media/coupon1.5d81524f.png" className="judiantopRimg" alt=""/>
                    <div className="judiantopL">
                        <img src="https://mobile.bao.cn/static/media/registerVoucher.e7fd2483.png" className="judiantopLimg" alt=""/>
                        <span className="judiantopLa">
                            <span>新用户注册即送</span>
                            <span className="judiantopLaa">800</span>
                            <span>￥</span>
                        </span>
                        <div className="judiantopLb">
                            <p>点击</p>
                            <p>领取</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}        
export default Judiantop;