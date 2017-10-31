import React , { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import {graphql} from 'react-apollo';
import query from '../queries/fetchCurrentUser';

class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors:[]
    }
  }
  
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      nextProps.history.push(`/users/${nextProps.data.user.id}`)
    }
  }
  
  onSubmitForm({ email , password }) {
    this.props.mutate({
      variables: {email, password},
      refetchQueries:[{query}]
    }).catch(res => { 
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
  }
  
  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <AuthForm onSubmitForm={this.onSubmitForm.bind(this)} errors={this.state.errors} />
      </div>
    )
  }
}


export default graphql(query)(
  graphql(mutation)(SignupForm)
);