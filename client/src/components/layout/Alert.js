import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const context = useContext(AlertContext);

  return (
    context.alerts.length > 0 &&
    context.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    ))
  );
};

export default Alert;
