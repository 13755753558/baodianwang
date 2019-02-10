import React,{Component} from 'react';
import BottomBar from '../../components/BottomBar'


class Project extends Component{
    render(){
        return (
            <div className="page project">
                <div className="main">
                    <h1>项目</h1>
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Project;