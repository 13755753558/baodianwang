import React,{Component} from 'react';

//使用axios请求数据
import axios from 'axios';

class Findsix extends Component{
    constructor(){
        super();
        this.state = {
            findsixdata:[]
        }
    }
    componentDidMount() {
        let imgurl = 'mobile_api/api/userVip/activityList';
        axios.get(imgurl).then(response => {
            //console.log(response);
            //获取前面4个数据
            let findsixdata = response.data.data.slice(0,3);
            this.setState({
                findsixdata
            })
        }).catch(error => { 
            console.log(error); 
        })
    }
    render(){
        return (
            <div className="findcon findsix">
                <div className="itemTitle___1AOe9">
                    <span className="leftTxt___1-WgP">热门活动</span>
                    <a href="/find/hotActivity">
                        <span className="rightTxt___1kT6I">更多&gt;</span>
                    </a>
                </div>
                <ul className="hotActive___y0pGn">
                    {this.state.findsixdata.map(item=>{
                        return(
                           <li key={item.id}>
                                <div className="shadow___1aVfH">活动已结束</div>
                                <img src={item.image_wap} alt="" />
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
export default Findsix;