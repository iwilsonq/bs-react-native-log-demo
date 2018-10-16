# Reason React Native

This project is a starting point for setting up a React Native project that uses ReasonML.

It is essentially a from scratch `react-native init <projectName>` setup. It also depends on

- `bs-platform`
- `reason-react`
- `bs-react-native`

## Installation

You'll need xcode or the android simulator in order to run a React Native project. You will also need to install the React Native CLI if you haven't already.

```sh
  npm i -g react-native-cli

  git clone git@github.com:iwilsonq/reason-react-starter

  npm install

  react-native run-ios
  # OR
  react-native run-android

  # Wait for the simulator to get set up, then check it out!
```

When your app opens in the simulator, you can enable live reloading by entering CMD+D and selecting "Enable Live Reload"

## Constructing from Scratch

If you're interested in how to set this up from scratch [post on Callstack's blog](https://blog.callstack.io/getting-started-with-reasonml-and-react-native-299476389c3e) by [Mateusz Zatorski](https://github.com/knowbody)
