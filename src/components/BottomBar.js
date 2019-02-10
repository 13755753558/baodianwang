import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class BottomBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab:'/home',
            tabs:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    icon:'icon-shouye'
                },
                {
                    text:'项目',
                    path:'/project',
                    name:'Project',
                    icon:'icon-xiangmu'
                },
                {
                    text:'发现',
                    path:'/find',
                    name:'Find',
                    icon:'icon-faxian'
                },
                {
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'icon-wode2'
                }
            ]
        }
    }
    componentDidMount(){
        let hash = window.location.hash.split('/')[1];
        this.setState({
            selectedTab:'/'+hash
        })
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#444"
                tintColor="#00a6e2"
                barTintColor="white"
                prerenderingSiblingsNumber={0}
                noRenderContent
            >
                {
                    this.state.tabs.map(item=>{
                        return (
                        <TabBar.Item
                            title={item.text}
                            key={item.name}
                            icon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selectedIcon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selected={this.state.selectedTab === item.path}
                            onPress={() => {
                                this.setState({
                                    selectedTab: item.path,
                                });
                                this.props.history.push(item.path);
                            }}
                        >
                        </TabBar.Item>
                        )
                    })
                }
                
            </TabBar>
        )
    }
}

// 利用withRouter高阶组件包装BottomBar组件
BottomBar = withRouter(BottomBar);

export default BottomBar;