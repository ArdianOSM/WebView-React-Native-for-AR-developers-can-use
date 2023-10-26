import React, { useState } from 'react';
import { Button, View, StyleSheet, Modal, Text, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const WEB_PAGE_URL = 'https://www.arvision.biz/ar'; // Replace with your desired URL

export default function App() {
  const [visible, setVisible] = useState(false);

  const openLinkInBrowserHandler = () => {
    Linking.canOpenURL(WEB_PAGE_URL).then((supported) =>{
      supported && Linking.openURL(WEB_PAGE_URL);
    })
  }

  const openLinkInWebView = () => setVisible(true);

  return (
    <View style={styles.container}>
      <Button
      title={'Open Link in Browser'}
      onPress={openLinkInBrowserHandler}
      />
      <Button title="Open Link in Browser" onPress={openLinkInWebView} />

      <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(false)}
      >
        <View  source={{ uri: WEB_PAGE_URL }} />
        <Button title="Close" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    height: 20,
  }
});
