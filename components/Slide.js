import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const Slide = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };
  
  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>

            
            <Text style={styles.titleStyle}>
              WELCOME TO TIC-TAC-TOE
            </Text>
            <Button title="LETS PLAY" onPress={() => navigation.navigate('Home')}
/>

      
          </View>
          
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
      
    </>
    
  );
      
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#356E9A",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'An early variation of the game was played in the Roman Empire, around the 1st century B.C.',
    title: 'History of Tic-Tac-Toe',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#008ee2',
  },
  {
    key: 's2',
    title: 'Terni Lapilli',
    text: 'It was called terni lapilli, which means "three pebbles at a time.',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#ffbb00',
  },
  {
    key: 's3',
    title: 'Advanced Tic-Tac-Toe',
    text: 'Tic-tac-toe can be made significantly more complex by increasing the size of the board to 4-by-4, 5-by-5, or even up to a 20-by-20 grid.',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#49b86b',
  },
  {
    key: 's4',
    title: 'Gameplay',
    text: ' In a 3-by-3 grid game, the player who is playing "X" always goes first. Players alternate placing Xs and Os on the board until either player has three in a row, horizontally, vertically, or diagonally or until all squares on the grid are filled.',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#4a90e2',
  },
  {
    key: 's5',
    title: 'Other Variants',
    text: 'Tic-tac-toe can be made significantly more complex by increasing the size of the board to 4-by-4, 5-by-5, or even up to a 20-by-20 grid',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#f44336',
  },
  {
    key: 's6',
    title: 'Tic-Tac-Toe Mobile',
    text: ' Tic-tac-toe is a game that is traditionally played by being drawn on paper, and it can be played on a computer or on a variety of media.',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#1ea0a5',
  },
];