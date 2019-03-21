import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class TabBar extends Component {
  static defaultProps = {
    resortList: [],
  }

  createTab = () => {
    const tabBar = [];
    const { resortList } = this.props;
    const resortCount = resortList.length;

    for (let i = 0; i < resortCount; i += 1) {
      const { name } = resortList[i];
      const { idx } = resortList[i];
      tabBar.push(
        <Tab eventKey={idx} title={name} />,
      );
    }
    return tabBar;
  }

  handleSelect = (idx) => {
    this.props.selectResort(idx);
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
