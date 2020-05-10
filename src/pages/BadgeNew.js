import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  //Fix warning "A component is changing an uncontrolled input of type text to be controlled"
  state = {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};

  handleChange = (e) => {
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
  
  render() {
    return ( 
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              email={this.state.form.email}
              jobTitle={this.state.form.jobTitle}
              twitter={this.state.form.twitter}
              />
          </div>
          <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}
              />
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
export default BadgeNew;
