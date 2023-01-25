import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateAccountFormScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).View4017d0f5}>
        {/* Title */}
        <Text style={styles(theme).Text7d026331}>
          {'Complete your account'}
        </Text>
        {/* sub title */}
        <Text style={styles(theme).Text7ff76e9d}>
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).Viewc179434f}>
          {/* First Name */}
          <View>
            {/* First Name */}
            <Text style={styles(theme).Text930dafb8}>{'First Name'}</Text>
            {/* First Name Input */}
            <TextInput
              onChangeText={newFirstNameInputValue => {
                try {
                  setTextInputValue(newFirstNameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInputb7362647}
              placeholder={'Enter your first name'}
              value={textInputValue}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Last Name */}
          <View style={styles(theme).View6728d304}>
            {/* Last Name */}
            <Text style={styles(theme).Text930dafb8}>{'Last Name'}</Text>
            {/* Last Name Input */}
            <TextInput
              onChangeText={newLastNameInputValue => {
                try {
                  setTextInputValue(newLastNameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInputb7362647}
              placeholder={'Enter your last name'}
              value={textInputValue}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
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
                style={styles(theme).TextInputcb71c607}
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
          {/* Confirm Password */}
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
                style={styles(theme).TextInputcb71c607}
                placeholder={'Confirm password'}
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
          {/* Continue with Email */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('EnterOTPScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonfaad52b1}
            title={'Continue with Email'}
          />
          {/* Login */}
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
              <Text style={styles(theme).Textd0a776eb}>{'Login'}</Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    Image9e5973b7: { height: 24, width: 24 },
    Text7d026331: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
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
    TextInputcb71c607: {
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
    Textc0861a3a: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      opacity: 0.64,
    },
    Textd0a776eb: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
    },
    Textf258193b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      marginTop: 16,
    },
    View00ddb757: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 45,
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
    View4017d0f5: { flex: 1, justifyContent: 'center', marginTop: 20 },
    View6728d304: { marginTop: 16 },
    Viewc179434f: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'center',
    },
  });

export default withTheme(CreateAccountFormScreen);
