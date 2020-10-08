import React, { Fragment } from 'react';
import CompJumbotron from '../CompJumbotron/CompJumbotron'
import CompService from '../ComponentService/CompService';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompTentangKami from '../ComponentTentangKami/CompTentangKami'






class CompHome extends React.Component {
  render() {
    return (
      <Fragment>
        <CompJumbotron />
        <CompService />
        <CompTentangKami />
      </Fragment>
    )
  }
}

export default CompHome;