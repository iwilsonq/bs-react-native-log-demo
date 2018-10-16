'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var TextInput$BsReactNative = require("bs-react-native/src/components/textInput.js");
var SafeAreaView$BsReactNative = require("bs-react-native/src/components/safeAreaView.js");
var Validate$ReasonReactNative = require("./Validate.js");
var TouchableHighlight$BsReactNative = require("bs-react-native/src/components/touchableHighlight.js");

function str(prim) {
  return prim;
}

var screenContainer = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(1),
      /* :: */[
        Style$BsReactNative.justifyContent(/* FlexStart */0),
        /* :: */[
          Style$BsReactNative.alignItems(/* FlexStart */0),
          /* :: */[
            Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#fff"])),
            /* :: */[
              Style$BsReactNative.width(/* Pct */Block.__(1, [100])),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var headerText = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.color(/* String */Block.__(0, ["#000"])),
      /* :: */[
        Style$BsReactNative.fontSize(/* Float */Block.__(0, [24])),
        /* :: */[
          Style$BsReactNative.fontWeight(/* Bold */737455525),
          /* :: */[
            Style$BsReactNative.marginTop(/* Pt */Block.__(0, [16])),
            /* :: */[
              Style$BsReactNative.marginBottom(/* Pt */Block.__(0, [24])),
              /* :: */[
                Style$BsReactNative.marginHorizontal(/* Pt */Block.__(0, [24])),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var screenContent = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.width(/* Pct */Block.__(1, [100])),
      /* :: */[
        Style$BsReactNative.height(/* Pct */Block.__(1, [98])),
        /* :: */[
          Style$BsReactNative.justifyContent(/* SpaceBetween */5),
          /* [] */0
        ]
      ]
    ]);

var form = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.borderTopWidth(1),
      /* :: */[
        Style$BsReactNative.borderColor(/* String */Block.__(0, ["#d3d3d3"])),
        /* [] */0
      ]
    ]);

var listItem = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flexDirection(/* Row */0),
      /* :: */[
        Style$BsReactNative.justifyContent(/* SpaceBetween */5),
        /* :: */[
          Style$BsReactNative.borderColor(/* String */Block.__(0, ["#d3d3d3"])),
          /* :: */[
            Style$BsReactNative.borderBottomWidth(1),
            /* :: */[
              Style$BsReactNative.paddingHorizontal(/* Pt */Block.__(0, [24])),
              /* :: */[
                Style$BsReactNative.paddingVertical(/* Pt */Block.__(0, [16])),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var textInput = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(1),
      /* :: */[
        Style$BsReactNative.textAlign(/* Right */2),
        /* [] */0
      ]
    ]);

var saveButton = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.justifyContent(/* Center */2),
      /* :: */[
        Style$BsReactNative.alignItems(/* Center */2),
        /* :: */[
          Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#000"])),
          /* :: */[
            Style$BsReactNative.width(/* Pct */Block.__(1, [100])),
            /* :: */[
              Style$BsReactNative.paddingVertical(/* Pt */Block.__(0, [16])),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var saveButtonText = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.color(/* String */Block.__(0, ["#fff"])),
      /* :: */[
        Style$BsReactNative.fontWeight(/* Bold */737455525),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* screenContainer */screenContainer,
  /* headerText */headerText,
  /* screenContent */screenContent,
  /* form */form,
  /* listItem */listItem,
  /* textInput */textInput,
  /* saveButton */saveButton,
  /* saveButtonText */saveButtonText
];

var component = ReasonReact.statelessComponent("ListItem");

function make(value, onChangeText, label, placeholder, keyboardType, _) {
  var makeValue = function (value) {
    if (value !== undefined) {
      var value$1 = value;
      var variant = value$1[0];
      if (variant !== 3654863) {
        if (variant >= 365180284) {
          var f = value$1[1];
          if (f !== 0) {
            return Pervasives.string_of_float(f);
          } else {
            return "";
          }
        } else {
          return value$1[1];
        }
      } else {
        var i = value$1[1];
        if (i !== 0) {
          return String(i);
        } else {
          return "";
        }
      }
    } else {
      return "";
    }
  };
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
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(listItem), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[label])),
                              ReasonReact.element(undefined, undefined, TextInput$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(textInput), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, keyboardType, undefined, undefined, undefined, undefined, onChangeText, undefined, undefined, undefined, undefined, undefined, undefined, placeholder, undefined, undefined, undefined, undefined, undefined, undefined, makeValue(value), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var ListItem = /* module */[
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.reducerComponent("EditLog");

function make$1() {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              return ReasonReact.element(undefined, undefined, Curry.app(SafeAreaView$BsReactNative.make, [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              Js_primitive.some(screenContainer),
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              /* array */[ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(screenContent), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                          ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(form), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                                    ReasonReact.element(undefined, undefined, make(/* `Float */[
                                                              365180284,
                                                              state[/* milesRan */2]
                                                            ], (function (value) {
                                                                console.log("miles", value);
                                                                if (value === "") {
                                                                  return Curry._1(send, /* UpdateMilesRan */Block.__(1, [0]));
                                                                } else if (Validate$ReasonReactNative.$$float(value)) {
                                                                  return Curry._1(send, /* UpdateMilesRan */Block.__(1, [Caml_format.caml_float_of_string(value)]));
                                                                } else {
                                                                  return 0;
                                                                }
                                                              }), "Distance", "Miles Ran", /* numeric */734061261, /* array */[])),
                                                    ReasonReact.element(undefined, undefined, make(/* `Int */[
                                                              3654863,
                                                              state[/* situps */4]
                                                            ], (function (value) {
                                                                if (value === "") {
                                                                  return Curry._1(send, /* UpdateSitUps */Block.__(3, [0]));
                                                                } else if (Validate$ReasonReactNative.$$int(value)) {
                                                                  return Curry._1(send, /* UpdateSitUps */Block.__(3, [Caml_format.caml_int_of_string(value)]));
                                                                } else {
                                                                  return 0;
                                                                }
                                                              }), "Sit Ups", "Sit Up Count", /* numeric */734061261, /* array */[])),
                                                    ReasonReact.element(undefined, undefined, make(/* `Int */[
                                                              3654863,
                                                              state[/* pushups */3]
                                                            ], (function (value) {
                                                                if (value === "") {
                                                                  return Curry._1(send, /* UpdatePushUps */Block.__(2, [0]));
                                                                } else if (Validate$ReasonReactNative.$$int(value)) {
                                                                  return Curry._1(send, /* UpdatePushUps */Block.__(2, [Caml_format.caml_int_of_string(value)]));
                                                                } else {
                                                                  return 0;
                                                                }
                                                              }), "Push Ups", "Push Up Count", /* numeric */734061261, /* array */[])),
                                                    ReasonReact.element(undefined, undefined, make(/* `String */[
                                                              -976970511,
                                                              state[/* notes */1]
                                                            ], (function (notes) {
                                                                return Curry._1(send, /* UpdateNotes */Block.__(0, [notes]));
                                                              }), "Notes", "Notes", /* default */465819841, /* array */[]))
                                                  ])),
                                          ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, TouchableHighlight$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function () {
                                                                  return Curry._1(send, /* CreateLog */0);
                                                                }), undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(saveButton), undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(saveButtonText), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Save"]))]))]))
                                        ]))]
                            ]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* logs : [] */0,
                      /* notes */"",
                      /* milesRan */0,
                      /* pushups */0,
                      /* situps */0
                    ];
            }),
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                var newLog_000 = /* pushups */state[/* pushups */3];
                var newLog_001 = /* situps */state[/* situps */4];
                var newLog_002 = /* milesRan */state[/* milesRan */2];
                var newLog_003 = /* notes */state[/* notes */1];
                var newLog = /* record */[
                  newLog_000,
                  newLog_001,
                  newLog_002,
                  newLog_003
                ];
                return /* Update */Block.__(0, [/* record */[
                            /* logs */Pervasives.$at(state[/* logs */0], /* :: */[
                                  newLog,
                                  /* [] */0
                                ]),
                            /* notes */"",
                            /* milesRan */0,
                            /* pushups */0,
                            /* situps */0
                          ]]);
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* logs */state[/* logs */0],
                                  /* notes */action[0],
                                  /* milesRan */state[/* milesRan */2],
                                  /* pushups */state[/* pushups */3],
                                  /* situps */state[/* situps */4]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* logs */state[/* logs */0],
                                  /* notes */state[/* notes */1],
                                  /* milesRan */action[0],
                                  /* pushups */state[/* pushups */3],
                                  /* situps */state[/* situps */4]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* logs */state[/* logs */0],
                                  /* notes */state[/* notes */1],
                                  /* milesRan */state[/* milesRan */2],
                                  /* pushups */action[0],
                                  /* situps */state[/* situps */4]
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* logs */state[/* logs */0],
                                  /* notes */state[/* notes */1],
                                  /* milesRan */state[/* milesRan */2],
                                  /* pushups */state[/* pushups */3],
                                  /* situps */action[0]
                                ]]);
                  
                }
              }
            }),
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

exports.str = str;
exports.Styles = Styles;
exports.ListItem = ListItem;
exports.component = component$1;
exports.make = make$1;
/* screenContainer Not a pure module */
