import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo,index }) => {
  return (
    <div className='card'>
      <span className='badge badge-success'>{index+1}</span>
      <h3 className='text-center'>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
