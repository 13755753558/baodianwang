import React, { Component } from 'react';
import { Modal} from 'antd-mobile';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Jusuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
        };
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            modal2: true,
        });
    }
    onClose = key => () => {
        this.setState({
            modal2: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <div className="haha">
                <div className="jucalculator" onClick={this.showModal('modal2')}></div>
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    // afterClose={() => { alert('afterClose'); }}
                >
                    <div id="jisuan">
                        <div className="jimodal">
                            <p className="p1___3pa_N">参考回报</p>
                            <p className="jiresult">￥275</p>
                            <div className="form___EfhjB">
                                <div className="row___3o5-0">
                                    <span>买入金额</span>
                                    <input type="text" maxLength="10" />
                                    <span>元</span>
                                </div>
                                <div className="border___3DYF6"></div>
                                <div className="row___3o5-0">
                                    <span>买入期限</span>
                                    <input type="text" maxLength="5" />
                                    <span>个月</span>
                                </div>
                            </div>
                            <div className="p3___ZTdqK">
                                参考年化回报：11.00%
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

//暴露
export default Jusuan;

