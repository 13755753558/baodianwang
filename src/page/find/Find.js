import React,{Component} from 'react';

import BottomBar from '../../components/BottomBar'


class Find extends Component{
    render(){
        return (
            <div className="page finder">
                <div className="main">
                    <h1>发现页面</h1>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>   
        )
    }
}

export default Find;