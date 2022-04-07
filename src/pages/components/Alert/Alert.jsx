import React from 'react'
import { useAlert } from '../../context/AlertContext';

import './alert.css'
const Alert = () => {
    const {alertObj } =useAlert();
    console.log('alert object is',alertObj);
    const alertclass = alertObj.alerttype + ' alert alert-position'

    
  return (
    <div className={alertclass}>
        {alertObj.text}
    </div>
  )
}

export default Alert