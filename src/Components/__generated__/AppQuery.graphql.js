/**
 * @flow
 * @relayHash 3868af673cb8bc9a8a3574535c409fed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_query$ref = any;
export type AppQueryVariables = {|
  filter?: ?string
|};
export type AppQueryResponse = {|
  +dashboard: ?{|
    +widgets: ?$ReadOnlyArray<?{|
      +$fragmentRefs: App_query$ref
    |}>
  |}
|};
*/


/*
query AppQuery(
  $filter: String
) {
  dashboard(filter: $filter) {
    widgets {
      ...App_query
      id
    }
    id
  }
}

fragment App_query on Widget {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $filter: String\n) {\n  dashboard(filter: $filter) {\n    widgets {\n      ...App_query\n      id\n    }\n    id\n  }\n}\n\nfragment App_query on Widget {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dashboard",
        "storageKey": null,
        "args": v1,
        "concreteType": "RootType",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "widgets",
            "storageKey": null,
            "args": null,
            "concreteType": "Widget",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "App_query",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dashboard",
        "storageKey": null,
        "args": v1,
        "concreteType": "RootType",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "widgets",
            "storageKey": null,
            "args": null,
            "concreteType": "Widget",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52223ccb774a617096c46419e52527e2';
module.exports = node;
