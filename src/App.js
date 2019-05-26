import React from 'react';
import SortableTree from 'react-sortable-tree';

import treeData from './treeData';



export default class App extends React.Component {
  state = {
    treeData
  };

  handleTreeOnChange = treeData => {
    this.setState({ treeData });
  };



  render() {
    const { treeData } = this.state;

    return (
      <div className="wrapper">
        <div className="tree-wrapper">
          <SortableTree
            treeData={treeData}
            onChange={this.handleTreeOnChange}          
          />
        </div>
      </div>
    );
  }
}
