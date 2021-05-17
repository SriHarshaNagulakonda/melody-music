import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
      <React.Fragment>
        <nav className='navbar bg-primary fixed-top'>
          <h3>
            <i className={icon} /> {title}
          </h3>
        </nav>
        <br />
        <br />
        <br />
    </React.Fragment>

  );
};

Navbar.defaultProps = {
  title: 'Melody Music',
  icon: 'fa fa-music'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;