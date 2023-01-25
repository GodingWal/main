import React from 'react';
import Images from '../config/Images';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboarding3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles(theme).ImageBackground8f6ed0a5}
        resizeMode={'cover'}
        source={Images.PexelsMarkofitProduction61587731}
      >
        <View style={styles(theme).Viewcb110a01}>
          <LinearGradient
            style={styles(theme).LinearGradienta5dc0dea}
            color1={theme.colors['Custom Color']}
            endX={0}
            startX={0}
            startY={0}
            endY={100}
            color2={'rgba(0, 0, 0, 0)'}
          />
          <LinearGradient
            style={styles(theme).LinearGradient53324cb4}
            color1={theme.colors['Custom Color']}
            endX={0}
            endY={0}
            startY={100}
            startX={0}
            color2={'rgba(0, 0, 0, 0)'}
          >
            {/* heading */}
            <Text style={styles(theme).Text3ccf9844}>
              {'We will help you to \nAchieve your Dream \nBody'}
            </Text>
            {/* description */}
            <Text style={styles(theme).Text2e4668bf}>
              {
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy '
              }
            </Text>
            {/* Get Started */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('CreateAccountScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttonc977dd64}
              title={'Get Started'}
            />
            {/* Login */}
            <View style={styles(theme).View189b670d}>
              <Text style={styles(theme).Text89e724e5}>
                {'Don’t have an account? '}
              </Text>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('CreateAccountScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text style={styles(theme).Textf52254e9}>{'Register'}</Text>
              </Touchable>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonc977dd64: {
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 24,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 54,
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
    LinearGradient53324cb4: { paddingBottom: 12, width: '100%' },
    LinearGradienta5dc0dea: {
      height: '50%',
      position: 'absolute',
      top: 0,
      width: '100%',
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
    Text3ccf9844: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 30,
      marginTop: 60,
      textAlign: 'center',
    },
    Text89e724e5: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      opacity: 1,
    },
    Textf52254e9: {
      color: theme.colors['Custom Color_13'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
    },
    View189b670d: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      paddingBottom: 30,
    },
    Viewcb110a01: { alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  });

export default withTheme(Onboarding3Screen);
