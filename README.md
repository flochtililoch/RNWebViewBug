# Demo app for 

This project exhibits the issue highlighted in and currently happening with `react-native-webview@9.4.0`, specifically on Android.

How to test:

1. clone
```sh
$ git clone git@github.com:flochtililoch/RNWebViewBug.git
```

2. install dependencies
```sh
$ cd RNWebViewBug
$ yarn
$ cd ios
$ pod install
```

3. start Android emulator

4. start local web server and make it reachable by android emulator
```sh
$ npx http-server -c-1 web
$ adb reverse tcp:8080 tcp:8080
```

5. run app on iOS and Android
```sh
$ npx react-native run-ios
$ npx react-native run-android
```
