import React,{Component} from 'react';
import BottomBar from '../../components/BottomBar'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import '../../sass/project.scss';

//引入组件
import Judiantop from './Judiantop';
import Judian from './Judian';
import Zhitou from './Zhitou';
import Zhaiquan from './Zhaiquan.jsx';

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
    constructor (props) {
        super(props)
        this.state = {}
        this.goJudetail = this.goJudetail.bind(this)
    }
    goJudetail(id){
        // this.props.history.push({path:`/judetail/${this.state.judianlist[idx].id}` });
        this.props.history.push({pathname: '/judetail/'+ id})
    }
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
                                    <Judian func={this.goJudetail}/>
                                </div>
                                <div className="projecttwo">
                                    <Judiantop />
                                    <Zhitou />
                                </div>
                                <div className="projectthr">
                                    <Zhaiquan />
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