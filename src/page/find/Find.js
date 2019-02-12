import React,{Component} from 'react';
import '../../sass/find.scss'

import BottomBar from '../../components/BottomBar'
import FindBanner from './FindBanner';
import Findtwo from './Findtwo';
import Findthr from './Findthr';
import Findfor from './Findfor';


class Find extends Component{
    render(){
        return (
            <div className="page finder">
                <div className="main">
                    <FindBanner />
                    <Findtwo />
                    <Findthr />
                    <Findfor />
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>   
        )
    }
}

export default Find;