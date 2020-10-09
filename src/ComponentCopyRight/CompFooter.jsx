import boxicons from 'boxicons'
import React from 'react';


export default function CompFooter() {
  return (
    <div className=" card-footer text-center font-weight-bold font-italic lead p-3">
      <footer>
        <span style={{ color: 'rgb(169, 20, 9)', textShadow: '3px 0 black' }}>
          <box-icon color="yellow" name='plane-take-off' type='solid' border="circle" size="md" ></box-icon>
          Copyrigtby</span>
        <span style={{ color: 'rgb(10, 106, 182)', textShadow: '3px 0 green' }}>
          AngkasaDeveloperz
        </span>
        <box-icon color="yellow" name='plane-land' type='solid' border="circle" size="md" ></box-icon>
      </footer>
    </div>
  )
}
