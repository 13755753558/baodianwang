import React,{Component} from 'react';

class Findtwo extends Component{
    constructor(){
        super();
        this.state = {
            findtwodata:[
                {title:'消息',imgurl:'https://mobile.bao.cn/static/media/notice.6ac6cd43.png'},
                {title:'商城',imgurl:'https://mobile.bao.cn/static/media/mall.dc2095de.png'},
                {title:'签到',imgurl:'https://mobile.bao.cn/static/media/signOn.a555c5e9.png'},
                {title:'会员',imgurl:'https://mobile.bao.cn/static/media/member.5e60ac8a.png'}
            ]
        }
    }
    render(){
        return (
            <div className="findtwo">
                <ul className="findtwoUl">
                {this.state.findtwodata.map(item=>{
                    return (
                        <li key={item.title}>
                            <span>
                                <img src={item.imgurl} alt="" />
                                <p>{item.title}</p>
                            </span>
                        </li>
                    )
                })

                }
                
            </ul>
        </div>
        )
    }
}

//暴露
export default Findtwo;