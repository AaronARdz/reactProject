import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'

class BadgeNew extends React.Component {
  //Fix warning "A component is changing an uncontrolled input of type text to be controlled"
  state = {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};

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
      await api.badges.create(this.state.form)
      this.setState({loading: false}) 
    } catch (error) {
      this.setState({loading: false, error : error})
    }
  }
  
  render() {
    return ( 
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo" />
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
              />
          </div>
          <div className="col-6">
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              />
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
export default BadgeNew;
