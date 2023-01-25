import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const CreateAccountScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewbc350cc6}>
        {/* Title */}
        <Text style={styles(theme).Text94d9114e}>{'Create account'}</Text>
        {/* sub title */}
        <Text style={styles(theme).Text7ff76e9d}>
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>
      {/* Container */}
      <View style={styles(theme).View237a0100}>
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
        {/* Continue with Email */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('CreateAccountFormScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Buttonfaad52b1}
          title={'Continue with Email'}
        />
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

        <View style={styles(theme).View00ddb757}>
          <Text style={styles(theme).Textc0861a3a}>
            {'Already have an account? '}
          </Text>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text style={styles(theme).Text9b2240f2}>{'Login'}</Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonfaad52b1: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '700',
      height: 56,
      marginTop: 35,
      textAlign: 'center',
    },
    Divider0a713f3f: { height: 1, width: 60 },
    Image9e5973b7: { height: 24, width: 24 },
    Text22b187df: {
      color: theme.colors['Custom Color_14'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      paddingLeft: 16,
      paddingRight: 16,
      textAlign: 'center',
    },
    Text7ff76e9d: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      marginTop: 8,
      opacity: 0.6,
      textAlign: 'center',
    },
    Text930dafb8: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
    },
    Text94d9114e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
      textAlign: 'center',
    },
    Text9b2240f2: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
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
    Touchable91805b00: { marginTop: 25 },
    View00ddb757: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 45,
    },
    View237a0100: { paddingLeft: 20, paddingRight: 20 },
    View644cf555: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    },
    Viewbc350cc6: { paddingBottom: 35 },
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
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'center',
    },
  });

export default withTheme(CreateAccountScreen);
