import React,{Component} from 'react';
import { Carousel} from 'antd-mobile';


//使用axios请求数据
import axios from 'axios';

class HomeBanner extends Component {
    constructor(){
        super();
        this.state = {
            bannerlist:['1', '2', '3'],
            imgHeight:"4rem"
        }
    }
    componentDidMount() {
        let bannerurl = 'mobile_api/common/banner?cateId=1';
        axios.get(bannerurl).then(response => {
            //console.log(response);
            let bannerlist = response.data.data;
            this.setState({
                bannerlist
            })
        }).catch(error => { 
            console.log(error); 
        })
    }
    render() {
        return (
            <div className="homebanner">
            <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.bannerlist.map(val => (
                        <a
                        key={val}
                        href={val.url}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.img}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
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

export default HomeBanner;