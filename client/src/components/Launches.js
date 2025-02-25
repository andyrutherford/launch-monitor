import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const renderLaunches = ({ loading, error, data }) => {
    if (loading) return <h4>Loading...</h4>;
    if (error) return <p>{error.message}</p>;
    return data.launches.map((launch, idx) => (
      <LaunchItem key={idx} launch={launch} />
    ));
  };

  return (
    <>
      <h1 className='display-5 my-3'>Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => renderLaunches({ loading, error, data })}
      </Query>
    </>
  );
};

export default Launches;
