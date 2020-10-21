import React from 'react';

const LaunchItem = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  } = launch;
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9 '>
          <h4>Mission: {mission_name}</h4>
          <p>Date: {launch_date_local.slice(0, 10)}</p>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center'>
          <button className='btn btn-primary'>Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
