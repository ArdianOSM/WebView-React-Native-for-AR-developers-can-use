import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Linking, Image, ImageBackground } from 'react-native';
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
        <ImageBackground
          source={require('././images/unnamed.png')} // Replace with the path to your local image
          style={styles.imageBackground}
        >
          <Card.Content style={styles.transparentContent}>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={styles.buttonLabel}
              onPress={openLinkInBrowserHandler}
            >
              View AR
            </Button>
          </Card.Content>
        </ImageBackground>
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
    width: 400, // Adjust the width as needed
  },
  imageBackground: {
    height: 200, // Adjust the height as needed
    width: 400,
  },
  transparentContent: {
    backgroundColor: 'transparent', // Transparent background for Card.Content
  },
  button: {
    backgroundColor: 'lightblue', // Light blue background color for the button
    borderColor: 'transparent', // Transparent border
    borderRadius: 20, // Round the button's borders
    width: 160, // Button width
    alignSelf: 'right', // Align the button to the right
    top: 70,
    left: 200,
  },
  buttonLabel: {
    color: 'white', // Text color of the button
  },
});
