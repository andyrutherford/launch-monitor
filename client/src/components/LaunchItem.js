import React from 'react';
import { useHistory } from 'react-router-dom';

const LaunchItem = ({ launch }) => {
  const history = useHistory();
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  } = launch;
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='d-flex align-items-center'>
            <h4>Mission: {mission_name}</h4>
            <span
              className={`badge badge-pill badge-${
                launch_success ? 'success' : 'danger'
              } ml-2`}
            >
              {launch_success ? 'Success' : 'Failed'}
            </span>
          </div>
          <p>Date: {launch_date_local.slice(0, 10)}</p>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center'>
          <button
            className='btn btn-primary'
            onClick={() => history.push(`/launch/${flight_number}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
