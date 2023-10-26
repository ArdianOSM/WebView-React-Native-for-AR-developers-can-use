import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Linking, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Avatar, Card, Button } from 'react-native-paper';

const WEB_PAGE_URL = 'https://www.arvision.biz/ar'; // Replace with your desired URL
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function App() {
  const [visible, setVisible] = useState(false);

  const openLinkInBrowserHandler = () => {
    Linking.canOpenURL(WEB_PAGE_URL).then((supported) => {
      supported && Linking.openURL(WEB_PAGE_URL);
    });
  };

  const openLinkInWebView = () => setVisible(true);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image
          source={require('./images/unnamed.jpg')} // Replace with the path to your local image
          style={styles.image}
        />
        <Card.Title title="Open in Web Page" left={LeftContent} />
        <Card.Content>
          <Button
            mode="contained"
            onPress={openLinkInBrowserHandler}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Open Link in Browser
          </Button>
        </Card.Content>
      </Card>
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
  card: {
    width: 300, // Adjust the width as needed
  },
  image: {
    height: 200, // Adjust the height as needed
    width: 300,
  },
  button: {
    backgroundColor: '#007AFF', // Adjust the background color as needed
    marginTop: 10, // Adjust spacing as needed
  },
  buttonContent: {
    paddingVertical: 8, // Adjust padding as needed
  },
  separator: {
    height: 20,
  },
});
