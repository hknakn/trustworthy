import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type CardProps = {
  style?: object;
  headerText: string;
  imageText: string;
  image: ImageSourcePropType;
};

const Card = (props: CardProps) => {
  const {style, headerText, imageText, image} = props;

  return (
    <View style={[styles.card, style]}>
      <View style={styles.cardHeaderContainer}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{headerText}</Text>
        </View>

        <View style={styles.cardIconContainer}>
          <Feather name="umbrella" size={hp('2.1%')} color="#626262" />
        </View>
      </View>

      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={image} />
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>{imageText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: hp('4.1%'),
    alignSelf: 'center',
    width: '90%',
    height: '31%',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingTop: 15,
    paddingHorizontal: 21,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitleContainer: {
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: hp('2.15'),
    fontWeight: '500',
  },
  cardIconContainer: {
    width: wp('10.6%'),
    height: wp('10.6%'),
    borderRadius: wp('10.6%') / 2,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageContainer: {
    marginTop: hp('1.8%'),
    borderColor: '#ececec',
    borderWidth: 1,
  },
  cardImage: {
    width: '100%',
    height: hp('16%'),
  },
  imageTextContainer: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: hp('8.5%'),
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingLeft: wp('4%'),
  },
  imageText: {
    fontSize: hp('1.92%'),
    fontWeight: '400',
  },
});

export default Card;
