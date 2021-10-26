import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ConfirmedCircle from '../../components/confirmedCircle';
import Card from '../../components/card';
import Confetti from '../../components/confetti';
import Button from '../../components/button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AddConfirmationScreen = () => {
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <View style={styles.container}>
      <ConfirmedCircle />
      <Card
        headerText="Jackie's Life Insurance"
        imageText="Jackie's Life Insurance Statement"
        image={require('../../assets/certificate.jpeg')}
      />
      <Confetti isPlayed={isPlayed} />
      <View style={styles.buttonsContainer}>
        <Button
          text="Review this item"
          onPress={() => {
            setIsPlayed(!isPlayed);
          }}
        />
        <Button
          style={styles.addSthButton}
          outlined
          text="Add something else"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fbfbfb',
  },
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: hp('35.75%'),
  },
  addSthButton: {
    marginTop: hp('1.8%'),
  },
});

export default AddConfirmationScreen;
