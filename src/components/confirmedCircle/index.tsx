import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type ConfirmedCircleProps = {
  style?: object;
};

const ConfirmedCircle = (props: ConfirmedCircleProps) => {
  const {style} = props;

  return (
    <View style={[styles.circleContainer, style]}>
      <View style={styles.circle}>
        <Ionicons name="checkmark-sharp" size={hp('3.5%')} color="#ffffff" />
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
  circleContainer: {
    width: '100%',
    height: hp('9.25%'),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#006bfa',
    width: wp('11%'),
    height: wp('11%'),
    borderRadius: wp('11%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConfirmedCircle;
