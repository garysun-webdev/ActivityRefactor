import React , { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import {graphql} from 'react-apollo';
import query from '../queries/fetchCurrentUser';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors:[]
    }
  }
  
  //this.props is the old, current set of props
  //nextProps is the next set of props that will be in place
  //when the component rerenders.
  
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
        <h3>Login</h3>
        <AuthForm onSubmitForm={this.onSubmitForm.bind(this)} errors={this.state.errors} />
      </div>
    )
  }
}


export default graphql(query)(
  graphql(mutation)(LoginForm)
);