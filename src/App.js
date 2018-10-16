'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var EditLog$ReasonReactNative = require("./EditLog.js");

var component = ReasonReact.statelessComponent("App");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, EditLog$ReasonReactNative.make(/* array */[]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var App = /* module */[
  /* component */component,
  /* make */make
];

function app() {
  return ReasonReact.element(undefined, undefined, make(/* array */[]));
}

exports.App = App;
exports.app = app;
/* component Not a pure module */
