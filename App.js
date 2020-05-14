/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Loading: () => React$Node = () => (
  <ActivityIndicator color="blue" style={StyleSheet.absoluteFillObject} />
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <WebView
        source={{uri: 'http://localhost:8080/'}}
        style={styles.flex}
        startInLoadingState
        renderLoading={Loading}
      />
    </SafeAreaView>
  );
};

export default App;
