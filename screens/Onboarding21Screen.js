import React from 'react';
import Images from '../config/Images';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const Onboarding21Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <Image
        style={styles(theme).Image4bdd54ff}
        resizeMode={'cover'}
        source={Images.PexelsNappy9360}
      />
      <View style={styles(theme).Viewc4afbc85}>
        {/* Texts */}
        <View style={styles(theme).Viewc992f941}>
          {/* heading */}
          <Text style={styles(theme).Text800d93ee}>
            {'Track Your Active Lifestyle'}
          </Text>
          {/* description */}
          <Text style={styles(theme).Text5133a8e0}>
            {'With a goal driven approach '}
          </Text>
        </View>
        {/* Next */}
        <View style={styles(theme).View67e96e4e}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Onboarding22Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchable3147e42c}
          >
            <Circle size={60} bgColor={theme.colors['GetFit Orange']}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_2']}
              />
            </Circle>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Onboarding3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchable29534911}
          >
            <View style={styles(theme).View76c47008}>
              <Text style={styles(theme).Text5b5a7d1f}>{'Skip'}</Text>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Image4bdd54ff: { height: '70%', width: '100%' },
    Text5133a8e0: {
      color: theme.colors['Custom Color_2'],
      fontSize: 15,
      lineHeight: 25,
      marginTop: 10,
      opacity: 1,
      paddingRight: 40,
      textAlign: 'left',
    },
    Text5b5a7d1f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
    },
    Text800d93ee: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 30,
      lineHeight: 40,
      textAlign: 'left',
    },
    Touchable29534911: { marginLeft: 12 },
    Touchable3147e42c: {
      borderColor: theme.colors['Custom #329fb3'],
      borderStyle: 'solid',
    },
    View67e96e4e: {
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: 20,
    },
    View76c47008: {
      justifyContent: 'center',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewc4afbc85: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Custom Color'],
      borderTopRightRadius: 50,
      bottom: 0,
      height: 320,
      justifyContent: 'space-evenly',
      left: 0,
      paddingBottom: 45,
      paddingLeft: 25,
      paddingTop: 25,
      position: 'absolute',
      right: 0,
    },
    Viewc992f941: { flex: 1 },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(Onboarding21Screen);
