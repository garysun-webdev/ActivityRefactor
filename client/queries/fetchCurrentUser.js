import gql from 'graphql-tag';

const query = gql`
  {
    user{
      email
      id
    }
  }
`;

export default query;