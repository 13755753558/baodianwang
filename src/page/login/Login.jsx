import React,{Component} from 'react';
import '../../sass/login.scss'


class Login extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        };
        this.inputname = this.inputname.bind(this);
        this.inputpsw = this.inputpsw.bind(this);
        this.tohome = this.tohome.bind(this);
    }
    //控制表单的输入
    inputname(e){
        this.setState({
            username:e.target.value
        })
    }
    inputpsw(e){
        this.setState({
            password:e.target.value
        })
    }
    //返回首页
    tohome(){
        this.props.history.push({pathname:'/home'})
    }
    render(){
        return (
            <div className="page login">
                <div className="lotop">
                    <span className="locancel" onClick={this.tohome}>取消</span>
                </div>
                <div className="lologo">
                    <img className="logopic" src="https://mobile.bao.cn/static/media/logo.98290f66.png" alt="" />
                </div> 
                <div className="loinput">
                    <div className="container___3ltDs four___34Vcy">
                        <div className="wrap___3Ky4t">
                            <div className="false">
                                <span className="leftText___1zK0-">帐号</span>
                            </div>
                            <div className="center___2aNmI">
                                <input className="centerInput___1Whck" placeholder="手机号/邮箱/用户名" value={this.state.username} onChange={this.inputname}/>
                            </div>
                            <div className="right___2ngjV"></div>
                        </div>
                    </div>
                    <div className="container___3ltDs four___34Vcy">
                        <div className="wrap___3Ky4t">
                            <div className="false">
                                <span className="leftText___1zK0-">密码</span>
                            </div>
                            <div className="center___2aNmI">
                                <input className="centerInput___1Whck" placeholder="请输入密码" value={this.state.password} onChange={this.inputpsw}/>
                            </div>
                            <div className="right___2ngjV"></div>
                        </div>
                    </div>
                    <div className="logbtn">
                        <span className="logtext">登录</span>
                    </div>
                    <div className="forgetWrap___dIrJn">
                        <div className="forgetBox___3zbCR">
                            <div className="forget___3fPBO">忘记密码？</div>
                        </div>
                        <div>
                            <div className="register___396Zi">立即注册</div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Login;