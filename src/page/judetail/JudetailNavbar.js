import React,{Component} from 'react';
import history from 'history/createHashHistory'
import { NavBar, Icon } from 'antd-mobile';

class JudetailNarbar extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div className="jnarbar">
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                // onLeftClick={() => console.log('onLeftClick')}
                onLeftClick={() => history.goBack()}
                >聚点+详情</NavBar>
            </div>
        )
    }
}

//暴露
export default JudetailNarbar;