import React,{Component} from 'react';

//使用axios请求数据
import axios from 'axios';

class Findfiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            findfivgood:[]
        }
    }
    componentDidMount() {
        let goodurl = 'mobile_api/api/userVip/goodsList?page=1';
        axios.get(goodurl).then(response => {
            //console.log(response);
            // let findfivgood = response.data.data;
            //获取前面12个数据
            let findfivgood = response.data.data.slice(0,12);
            this.setState({
                findfivgood
            })
        }).catch(error => { 
            console.log(error); 
        })
    }
    render(){
        let {Gooddetail} = this.props
        return(
            <div className="findcon findfiv">
                <div className="itemTitle___1AOe9">
                    <span className="leftTxt___1-WgP">商城</span>
                        <a href="/find/shoppingMall">
                        <span className="rightTxt___1kT6I">更多&gt;</span>
                    </a>
                </div>
                <ul className="findfivgood">
                    {this.state.findfivgood.map((item,idx)=>{
                        return (
                            <li key={idx} onClick={()=>{
                                //console.log(this.state.findfivgood[idx].product_id)
                                Gooddetail(this.state.findfivgood[idx].product_id)
                            }}>
                                <span className="label___2qVEr">{item.label_name}</span>
                                <p className="shopTitle1___1FIsP">{item.product_name}</p>
                                <p className="shopTitle2___3URsP">
                                    <span>
                                        <img src="https://mobile.bao.cn/static/media/coin.5d24922a.png" alt="" />
                                    </span>
                                    <span>{item.price}</span>
                                </p>
                                <div className="imgBox___Q5TU3">
                                    <img className="products_img___2ws4b" src={item.image} alt="" />
                                </div>
                            </li>        
                            )
                        })
                    }   
                </ul>
            </div>
        )
    }
}

export default Findfiv;