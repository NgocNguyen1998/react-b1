import React, { Component } from 'react'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'


export default class BaiTapThucHanhLayoutComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
    )
  }
}
