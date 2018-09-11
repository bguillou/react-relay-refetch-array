import React, { Component, Fragment } from 'react'
import { QueryRenderer, graphql, createRefetchContainer } from 'react-relay'
import environment from '../helpers/createRelayEnvironment'

const Display = props => (
  <Fragment>
    {console.log(props)}
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
      <Fragment>
        <input type="text" />
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
            props
              ? console.log(props) || (
                  <FragmentDisplay query={props.dashboard.widgets} />
                )
              : '...'
          }
          variables={{ filter: '' }}
        />
      </Fragment>
    )
  }
}

export default App
