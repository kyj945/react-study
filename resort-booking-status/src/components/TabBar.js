import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

class TabBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  static defaultProps = {
    resortList: []
  }

  createTab = () => {
    let tabBar = [];
    const { resortList } = this.props;
    const resortCount = resortList.length;

    for(let i=0; i<resortCount; i++){
      let resortName = resortList[i].name
      let idx = resortList[i].idx
      tabBar.push(<Tab eventKey={idx} title={resortName}></Tab>)
    }
    return tabBar;
  }

  handleSelect = (idx) => {
    this.props.selectResort(idx)
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        onSelect={idx => this.handleSelect(idx)}
      >
        {this.createTab()}
      </Tabs>
    );
  }
}

export default TabBar;
