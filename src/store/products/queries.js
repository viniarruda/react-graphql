import api from '../../utils/api'
import axios from 'axios'

export const listGithub = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer a271a0e947ff1608e10ac85cfff58eb80b257f79'
  }

  return axios.post('https://api.github.com/graphql', {
    query: 
      `query GetRepositoryIssues($name: String!, $login: String!) {
        repositoryOwner(login: $login) {
          repository(name: $name) {
            stargazers {
              totalCount
            }
            watchers {
              totalCount
            }
          }
        }
      }`,
    variables: {
      "name": 'react',
      "login": 'facebook'
    }
  }, { headers: headers })
  .then(res => res.data)
  .catch(err => err.response.data)
}