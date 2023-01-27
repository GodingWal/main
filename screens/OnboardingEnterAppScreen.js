import React from 'react';
import Images from '../config/Images';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const OnboardingEnterAppScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles(theme).ImageBackground8f6ed0a5}
        resizeMode={'cover'}
        source={Images.PexelsAndreaPiacquadio37560421}
      >
        <View style={styles(theme).Viewbbe22ab2}>
          <LinearGradient
            style={styles(theme).LinearGradienta98db7de}
            color1={theme.colors['Custom Color']}
            endX={0}
            color2={'rgba(0, 0, 0, 0)'}
            endY={0}
            startX={0}
            startY={100}
          >
            {/* heading */}
            <Text style={styles(theme).Text199f746d}>
              {"Welcome, let's \nreach your health goals together"}
            </Text>
            {/* description */}
            <Text style={styles(theme).Text2e4668bf}>
              {
                '"We understand that reaching your health goals can be challenging, but \nwe\'re here to help. '
              }
            </Text>
            {/* Start Introduction */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('SelectLanguageScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttonf5f7c966}
              title={'Start Introduction'}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonf5f7c966: {
      backgroundColor: theme.colors['Custom Color_8'],
      borderRadius: 24,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 54,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      textAlign: 'center',
    },
    ImageBackground8f6ed0a5: {
      height: '100%',
      justifyContent: 'flex-end',
      width: '100%',
    },
    LinearGradienta98db7de: { height: '100%', width: '100%' },
    Text199f746d: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 30,
      marginTop: 100,
      textAlign: 'center',
    },
    Text2e4668bf: {
      color: theme.colors['Custom Color_2'],
      fontSize: 15,
      lineHeight: 22,
      marginTop: 5,
      opacity: 0.65,
      paddingLeft: 40,
      paddingRight: 40,
      textAlign: 'center',
    },
    Viewbbe22ab2: {
      alignItems: 'center',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
    },
  });

export default withTheme(OnboardingEnterAppScreen);
