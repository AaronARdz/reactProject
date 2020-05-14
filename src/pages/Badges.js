import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import api  from '../api';
import Loader from "../components/loader"
import PageError from '../components/PageError';

class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data : undefined,
  };

  componentDidMount () {
    this.fetchData()
    //actualiza los datos de la pagina cada 5 segundos
    this.intervalId = setInterval(this.fetchData,5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.list();
      this.setState({loading: false, data: data })
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }


  render() {
    if(this.state.loading === true && this.state.data === undefined) {
      return (
        <div className="text-center">
          <Loader />
        </div>

      )
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      //Se escribe el DIV para regresar un solo elemento, si no, marcara error
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
            {this.state.loading && <Loader></Loader>}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges;
