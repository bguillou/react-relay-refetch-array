import React, { Component, Fragment } from 'react'
import { QueryRenderer, graphql, createRefetchContainer } from 'react-relay'
import environment from '../helpers/createRelayEnvironment'

const Display = props => (
  <Fragment>
    <a onClick={() => props.relay.refetch({ id: '2' })}>Test</a>
    {props.query.map(v => <div key={v.id}>{v.title}</div>)}
  </Fragment>
)

const FragmentDisplay = createRefetchContainer(
  Display,
  graphql`
    fragment App_query on Widget @relay(plural: true) {
      id
      title
    }
  `,
  graphql`
    query AppRefetchQuery($id: String) {
      widget(id: $id) {
        ...App_query
      }
    }
  `,
)

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery($filter: String) {
            dashboard(filter: $filter) {
              widgets {
                ...App_query
              }
            }
          }
        `}
        render={({ props }) =>
          props ? <FragmentDisplay query={props.dashboard.widgets} /> : '...'
        }
        variables={{ filter: '' }}
      />
    )
  }
}

export default App
