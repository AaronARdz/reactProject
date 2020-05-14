import React from 'react';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter-logo.svg'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.lenght === 0) {
      return ( 
        <div>
          <h3>No badges we found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
      {this.props.badges.map(badge => {
        //cada prop o item en una lista, debe tener un unique key
        return(
          <div className="row  m-2 bg-light rounded shadow-sm">
            <div className="col-2">
              <img src={badge.avatarUrl} alt="" className="m-2 rounded"/>
            </div>
            <div className="col-8">
              <li className="m-2" key={badge.id}>
                <p className="font-weight-bold m-0">{badge.firstName} {badge.lastName}</p>
                <p className="text-primary m-0"><img src={twitterLogo} alt="" width="20px" height="20px"/>@{badge.twitter}</p>
                <p className="m-0">{badge.jobTitle}</p>
              </li>
            </div>
          </div>
        )
      })}
    </ul>
    );
  }
}

export default BadgesList;
