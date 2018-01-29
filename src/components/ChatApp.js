import React, { Component } from 'react'

import TopBar from './TopBar'
import ChatBox from './ChatBox'

export default class ChatApp extends Component {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <TopBar />
        <ChatBox />
      </div>
    )
  }
}
