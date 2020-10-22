import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useHistory, useParams } from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  const history = useHistory();
  let { flight_number } = useParams();
  flight_number = Number(flight_number);

  const renderLaunchInfo = ({ loading, error, data }) => {
    if (loading) return <h4>Loading...</h4>;
    if (error) return <p>{error.message}</p>;
    const {
      mission_name,
      launch_year,
      launch_success,
      launch_date_local,
      rocket: { rocket_id, rocket_name, rocket_type },
    } = data.launch;
    return (
      <div>
        <h1 className='display-4 my-3'>{mission_name}</h1>
        <h4 className='mb-3'>Launch Details</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Flight Number: {flight_number}</li>
          <li className='list-group-item'>Launch Year: {launch_year}</li>
          <li className='list-group-item'>
            Launch Status:{' '}
            <span
              className={`badge badge-pill badge-${
                launch_success ? 'success' : 'danger'
              } ml-2`}
            >
              {launch_success ? 'Success' : 'Failed'}
            </span>
          </li>
        </ul>
        <h4 className='my-3'>Rocket Details</h4>
        <ul className='list-group'>
          <li className='list-group-item'>ID: {rocket_id}</li>
          <li className='list-group-item'>Name: {rocket_name}</li>
          <li className='list-group-item'>Type: {rocket_type}</li>
        </ul>
        <button
          className='btn btn-secondary my-3'
          onClick={() => history.push('/')}
        >
          Go Back
        </button>
      </div>
    );
  };

  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) =>
          renderLaunchInfo({ loading, error, data })
        }
      </Query>
    </>
  );
};

export default Launch;
