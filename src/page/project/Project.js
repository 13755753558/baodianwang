import React,{Component} from 'react';
import BottomBar from '../../components/BottomBar'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import '../../sass/project.scss';

//引入组件
import Judiantop from './Judiantop';
import Judian from './Judian';

function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '聚点+' },
    { title: '直投项目' },
    { title: '债权转让' },
];

class Project extends Component{
    render(){
        return (
            <div className="page project">
                <div className="main">
                    <WhiteSpace />
                        <StickyContainer>
                            <Tabs tabs={tabs}
                                initalPage={'t2'}
                                renderTabBar={renderTabBar}
                            >
                                <div className="projectone">
                                    <Judiantop />
                                    <Judian />
                                </div>
                                <div>
                                    Content of second tab
                                </div>
                                <div>
                                    Content of third tab
                                </div>
                            </Tabs>
                        </StickyContainer>
                    <WhiteSpace />
                </div>
                <footer>
                    <BottomBar/>
                </footer>
            </div>
            
        )
    }
}

export default Project;