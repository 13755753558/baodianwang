import React,{Component} from 'react';

class Findfor extends Component{
    constructor(){
        super();
        this.state = {
            findfordata:[
                {title:'生日特权',imgurl:'https://mobile.bao.cn/static/media/special1.a25d5bd0.png'},
                {title:'节日礼包',imgurl:'https://mobile.bao.cn/static/media/special2.20d06952.png'},
                {title:'商城折扣',imgurl:'https://mobile.bao.cn/static/media/special3.969e4979.png'},
                {title:'免费提现',imgurl:'https://mobile.bao.cn/static/media/special4.630cc7b2.png'},
                {title:'抵用券',imgurl:'https://mobile.bao.cn/static/media/special5.3826697a.png'},
                {title:'加息券',imgurl:'https://mobile.bao.cn/static/media/special6.37bd8657.png'},
            ]

        }
    }

    render(){
        return(
            <div className="findcon findfor">
                <div className="itemTitle___1AOe9">
                    <span className="leftTxt___1-WgP">会员特权</span>
                    <a href="/find/memberCenter">
                        <span className="rightTxt___1kT6I">更多&gt;</span>
                    </a>
                </div>
                <ul className="special___2V4DY">
                    {this.state.findfordata.map(item=>{
                        return (
                            <li key={item.title}>
                                <img src={item.imgurl} alt="" />
                                <p>{item.title}</p>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}

//暴露
export default Findfor;