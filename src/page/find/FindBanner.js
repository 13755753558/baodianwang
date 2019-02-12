import React,{Component} from 'react';
import { Carousel} from 'antd-mobile';

//使用axios请求数据
import axios from 'axios';

class FindBanner extends Component{
    constructor(){
        super();
        this.state = {
            bannerdata:['1', '2'],
            imgHeight:"4rem"
        }
    }
    componentDidMount() {
        let bannerurl = 'mobile_api/api/userVip/userIndexBanner';
        axios.get(bannerurl).then(response => {
            // console.log(response);
            let bannerdata = response.data.data;
            this.setState({
                bannerdata
            })
        }).catch(error => { 
            console.log(error); 
        })
    }
    render() {
        return (
            <div className="findbanner">
            <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.bannerdata.map(val => (
                        <a
                        key={val}
                        href={val.url}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.image_app}
                            alt=""
                            style={{ width: '100%', height:'4rem',verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default FindBanner;