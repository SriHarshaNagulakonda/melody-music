import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div style={userStyle}>
    {repos.map((repo,index) => 
          <RepoItem repo={repo} index={index} key={repo.id}  />
    )}
    </div>
  )

};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '1rem'
}

export default Repos;
