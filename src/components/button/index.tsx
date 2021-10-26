import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type ButtonProps = {
  outlined?: boolean;
  text: string;
  style?: object;
};

const Button = (props: ButtonProps) => {
  const {outlined, text, style, ...rest} = props;

  return (
    <>
      <TouchableOpacity
        style={[!outlined ? styles.button : styles.outlinedButton, style]}
        {...rest}>
        <Text style={!outlined ? styles.buttonText : styles.outlinedButtonText}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: wp('90%'),
    height: hp('6%'),
    borderRadius: hp('6%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp('1.85%'),
    color: '#ffffff',
    fontWeight: '700',
  },
  outlinedButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#ececec',
    width: wp('90%'),
    height: hp('6%'),
    borderRadius: hp('6%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlinedButtonText: {
    fontSize: hp('1.85%'),
    color: 'black',
    fontWeight: '700',
  },
});

export default Button;
