'use strict';

var Navigation$ReboltNavigation = require("rebolt-navigation/src/Navigation.bs.js");

var Config = /* module */[];

var include = Navigation$ReboltNavigation.CreateNavigation(Config);

var StackNavigator = include[0];

var TabNavigator = include[1];

exports.Config = Config;
exports.StackNavigator = StackNavigator;
exports.TabNavigator = TabNavigator;
/* include Not a pure module */
