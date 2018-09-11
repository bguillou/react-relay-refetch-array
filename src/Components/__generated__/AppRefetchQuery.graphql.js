/**
 * @flow
 * @relayHash 69925e04c650413f766c553b0b04db46
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_query$ref = any;
export type AppRefetchQueryVariables = {|
  id?: ?string
|};
export type AppRefetchQueryResponse = {|
  +widget: ?{|
    +$fragmentRefs: App_query$ref
  |}
|};
*/


/*
query AppRefetchQuery(
  $id: String
) {
  widget(id: $id) {
    ...App_query
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
    "name": "id",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppRefetchQuery",
  "id": null,
  "text": "query AppRefetchQuery(\n  $id: String\n) {\n  widget(id: $id) {\n    ...App_query\n    id\n  }\n}\n\nfragment App_query on Widget {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "widget",
        "storageKey": null,
        "args": v1,
        "concreteType": "Widget",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_query",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "widget",
        "storageKey": null,
        "args": v1,
        "concreteType": "Widget",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cea77e8bceb3bc5c38272c608b8aa6b6';
module.exports = node;
