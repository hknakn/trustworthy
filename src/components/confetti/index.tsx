import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type ConfettiProps = {
  style?: object;
  isPlayed: boolean;
};

const Confetti = (props: ConfettiProps) => {
  const {style, isPlayed, ...rest} = props;
  const anim = useRef<LottieView>(null);

  useEffect(() => {
    anim.current?.play();
  }, [isPlayed]);

  return (
    <LottieView
      ref={anim}
      style={[styles.confetti, style]}
      source={require('../../assets/confetti.json')}
      loop={false}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  confetti: {
    width: '100%',
    height: hp('40%'),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: hp('3%'),
  },
});

export default Confetti;
