import React from 'react';
import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
import Loader from "../components/loader"

class BadgeEdit extends React.Component {
  //Fix warning "A component is changing an uncontrolled input of type text to be controlled"
  state = {
    loading: true,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};

  componentDidMount(){
    this.fetchData()
  }
  fetchData = async e => {
    this.setState({loading:true, error: null})

    try { 
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading:false , form: data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: {
        //con los 3 puntos se dejan caer todos lo valores anteriores, y luego se le agrega el nuevo, para que no se sobrescriban
        ... this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error:null})

    try {
      await api.badges.update(this.state.form)
      this.setState({loading: false})
      //redirect to badges if successful
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error : error})
    }
  }
  
  render() {
    if (this.state.loading) {
      return (
        <div className="text-center">
          <Loader />
        </div>
      )
    }
    return ( 
    <React.Fragment>
      <div className="BadgeEdit__hero">
        <img className="BadgeEdit__hero-img img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={this.state.form.firstName || 'First_Name'}
              lastName={this.state.form.lastName || 'Last_Name'}
              email={this.state.form.email || 'Email'}
              jobTitle={this.state.form.jobTitle || 'Job_Title'}
              twitter={this.state.form.twitter || 'Twitter'}
              avatarUrl=""
              />
          </div>
          <div className="col-6">
          <h1>Edit Attendant</h1>
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
              />
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
export default BadgeEdit;
