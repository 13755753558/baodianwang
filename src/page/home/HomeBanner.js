import React,{Component} from 'react';
import { Carousel} from 'antd-mobile';


//使用axios请求数据
// import axios from 'axios';

class HomeBanner extends Component {
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            bannerlist:[
                "https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_181107/201811070943339863.png",
                "https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_180508/201805080846168589.jpg",
                "https://bao-image.oss-cn-hangzhou.aliyuncs.com/uploadfile/img/month_171024/201710240111172374.png"
            ],
            imgHeight:200
        }
    }
//   componentDidMount() {
//     let bannerurl = 'mobile_api/common/banner?cateId=1';
//     axios.get(bannerurl) 
//         .then(function (response) {
//             console.log(response.data);
//         }) .catch(function (error) { 
//             console.log(error); 
//         })

//   }
  render() {
    return (
        <div className="homebanner">
            <Carousel
            autoplay={true}
            infinite
            >
            {this.state.bannerlist.map((item,idx) => (
                <div
                key={item}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img
                    src={this.state.bannerlist[idx]}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                </div>
            ))}
            </Carousel>
        </div>
    );
  }
}

export default HomeBanner;