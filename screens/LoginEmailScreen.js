import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Circle,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginEmailScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View style={styles(theme).View22a6ee33}>
        <View style={styles(theme).View53a32d40}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle size={50} bgColor={theme.colors['Custom Color_2']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Login'}</Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollView96badeaeContent
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).View11bf139f}>
          {/* Email */}
          <Text style={styles(theme).Text930dafb8}>{'Email'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInputb7362647}
            placeholder={'Enter your email address'}
            value={textInputValue}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
          />
          {/* Password */}
          <View>
            {/* Password */}
            <Text style={styles(theme).Textf258193b}>{'Password'}</Text>

            <View style={styles(theme).View2a3d08c9}>
              {/* Pasword Input */}
              <TextInput
                onChangeText={newPaswordInputValue => {
                  try {
                    setTextInputValue(newPaswordInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput61dd766c}
                placeholder={'Create a password'}
                value={textInputValue}
                editable={true}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
              />
              <View style={styles(theme).View3a47905e}>
                <Touchable>
                  <Image
                    style={styles(theme).Image9e5973b7}
                    resizeMode={'cover'}
                    source={Images.Hide}
                  />
                </Touchable>
              </View>
            </View>
          </View>
          {/* Login */}
          <View style={styles(theme).Viewe80d586a}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ForgotPasswordScreen_7n1gOTFM');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text style={styles(theme).Textbee160d5}>
                {'Forgot Password?'}
              </Text>
            </Touchable>
          </View>
          {/* Continue with Email */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonddc53cd8}
            title={'Continue with Email'}
          />
          {/* continue with */}
          <View style={styles(theme).View644cf555}>
            <Divider
              style={styles(theme).Divider0a713f3f}
              color={theme.colors['Custom Color_14']}
            />
            <Text style={styles(theme).Text22b187df}>{'Or continue with'}</Text>
            <Divider
              style={styles(theme).Divider0a713f3f}
              color={theme.colors['Custom Color_14']}
            />
          </View>
          {/* Google Login */}
          <Touchable style={styles(theme).Touchable91805b00}>
            <View style={styles(theme).Viewc7d4fa2c}>
              <Image
                style={styles(theme).Image9e5973b7}
                resizeMode={'cover'}
                source={Images.IconGoogle}
              />
              <Text style={styles(theme).Textd1910aef}>
                {'Continue with Google'}
              </Text>
            </View>
          </Touchable>
          {/* Apple Login */}
          <Touchable style={styles(theme).Touchable91805b00}>
            <View style={styles(theme).Viewc7d4fa2c}>
              <Image
                style={styles(theme).Image9e5973b7}
                resizeMode={'cover'}
                source={Images.IconApple}
              />
              <Text style={styles(theme).Textd1910aef}>
                {'Continue with Apple'}
              </Text>
            </View>
          </Touchable>
          {/* Sign Up */}
          <View style={styles(theme).View00ddb757}>
            <Text style={styles(theme).Textc0861a3a}>
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
              <Text style={styles(theme).Text9b2240f2}>{' Sign Up'}</Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonddc53cd8: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: '700',
      height: 56,
      marginTop: 35,
      textAlign: 'center',
    },
    Divider0a713f3f: { height: 1, width: 60 },
    Image9e5973b7: { height: 24, width: 24 },
    KeyboardAwareScrollView96badeaeContent: { paddingBottom: 40 },
    Text22b187df: {
      color: theme.colors['Custom Color_14'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      paddingLeft: 16,
      paddingRight: 16,
      textAlign: 'center',
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text930dafb8: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
    },
    Text9b2240f2: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
    },
    TextInput61dd766c: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 5,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      height: 52,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 8,
      width: '100%',
    },
    TextInputb7362647: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 5,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      height: 52,
      marginTop: 12,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textbee160d5: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      textAlign: 'right',
    },
    Textc0861a3a: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      opacity: 0.64,
    },
    Textd1910aef: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginLeft: 16,
    },
    Textf258193b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      marginTop: 16,
    },
    Touchable91805b00: { marginTop: 25 },
    View00ddb757: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 45,
    },
    View11bf139f: {
      marginTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    View22a6ee33: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginBottom: 12,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View2a3d08c9: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View3a47905e: {
      alignItems: 'center',
      height: 56,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      width: 48,
      zIndex: 1,
    },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    View644cf555: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    },
    Viewc7d4fa2c: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_2'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'center',
    },
    Viewe80d586a: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 25,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(LoginEmailScreen);
