import React, { Component } from 'react';
import fetchCurrentUser from '../queries/fetchCurrentUser';
import { graphql } from 'react-apollo';

export default (WrappedComponent) => {

  class authHOC extends Component{
    componentWillUpdate(nextProps){
      if(!nextProps.data.loading && !nextProps.data.user
          && nextProps.data.user.id != nextProps.match.params.id){
        nextProps.history.push(`/signin`);
      }
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  
  return graphql(fetchCurrentUser)(authHOC);
};
