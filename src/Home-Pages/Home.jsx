import React, { Fragment } from 'react';
import CompJumbotron from '../CompJumbotron/CompJumbotron'
import CompService from '../ComponentService/CompService';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompTentangKami from '../ComponentTentangKami/CompTentangKami'
import CompContact from '../ComponentTentangKami/CompContact'
import CompFooter from '../ComponentCopyRight/CompFooter'






class CompHome extends React.Component {
  render() {
    return (
      <Fragment>
        <CompJumbotron />
        <CompService />
        <CompTentangKami />
        <CompContact />
        <CompFooter />
      </Fragment>
    )
  }
}

export default CompHome;