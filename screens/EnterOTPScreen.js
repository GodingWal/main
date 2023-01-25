import React from 'react';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';

const EnterOTPScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [SuccesModal, setSuccesModal] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewd3558808}>
        {/* Title */}
        <Text style={styles(theme).Text4b46317f}>{'Enter OTP'}</Text>
        {/* sub title */}
        <Text style={styles(theme).Text4b30a0a5}>
          {'We have just sent you 4 digit code via your email '}
        </Text>
        {/* Email */}
        <Text style={styles(theme).Text28536908}>{'example@gmail.com'}</Text>
      </View>
      {/* Container */}
      <View style={styles(theme).View8f0b3cf1}>
        {/* OTP */}
        <View style={styles(theme).View1324b9e2}>
          {/* OTP */}
          <TextInput
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3af2cd0e}
            placeholder={textInputValue}
            value={textInputValue}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            keyboardType={'numeric'}
          />
          {/* OTP */}
          <TextInput
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3af2cd0e}
            placeholder={textInputValue}
            value={textInputValue}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            keyboardType={'numeric'}
          />
          {/* OTP */}
          <TextInput
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3af2cd0e}
            placeholder={textInputValue}
            value={textInputValue}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            keyboardType={'numeric'}
          />
          {/* OTP */}
          <TextInput
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput3af2cd0e}
            placeholder={textInputValue}
            value={textInputValue}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            keyboardType={'numeric'}
          />
        </View>
        {/* Continue */}
        <Button
          onPress={() => {
            try {
              setSuccesModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button8ac5ba49}
          title={'Continue'}
        />
        {/* Login */}
        <View style={styles(theme).Viewe88e6c5a}>
          <Text style={styles(theme).Text7854b7aa}>
            {'Didn’t receive code? '}
          </Text>

          <Touchable>
            <Text style={styles(theme).Text134306a3}>{'Resend Code'}</Text>
          </Touchable>
        </View>
      </View>

      <Modal visible={SuccesModal} animationType={'none'} transparent={true}>
        <View style={styles(theme).View7eebc22d}>
          <View style={styles(theme).Vieweccf3c7c} />
          <View style={styles(theme).View9838ce67}>
            <Circle size={75}>
              <View style={styles(theme).Viewdfdd7737}>
                <Icon
                  style={styles(theme).Icondbee5e7d}
                  size={101}
                  name={'Ionicons/ios-checkmark-circle'}
                  color={theme.colors['App Green']}
                />
              </View>
            </Circle>

            <Text style={styles(theme).Textaddbdc51}>
              {'You have logged in \nsuccessfully'}
            </Text>

            <Text style={styles(theme).Texte07f7035}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel'
              }
            </Text>

            <View style={styles(theme).View2a645ab7}>
              <Touchable
                onPress={() => {
                  try {
                    setSuccesModal(false);
                    navigation.navigate('OnboardingEnterAppScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchabled6eb9a0b}
              >
                <View style={styles(theme).Viewea9c7d25}>
                  <Text style={styles(theme).Text624a10d7}>{'Continue'}</Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button8ac5ba49: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '700',
      height: 56,
      marginTop: 35,
      textAlign: 'center',
    },
    Icondbee5e7d: { marginLeft: 7, marginTop: 2 },
    Text134306a3: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
    },
    Text28536908: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 8,
      opacity: 1,
      textAlign: 'center',
    },
    Text4b30a0a5: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginTop: 8,
      opacity: 0.6,
      textAlign: 'center',
    },
    Text4b46317f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 21,
      textAlign: 'center',
    },
    Text624a10d7: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      paddingLeft: 25,
      paddingRight: 25,
    },
    Text7854b7aa: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      opacity: 0.64,
    },
    TextInput3af2cd0e: {
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
      width: 52,
    },
    Textaddbdc51: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 21,
      lineHeight: 28,
      marginTop: 25,
      textAlign: 'center',
    },
    Texte07f7035: {
      color: theme.colors['Custom Color_2'],
      lineHeight: 20,
      marginTop: 10,
      opacity: 0.5,
      paddingLeft: 25,
      paddingRight: 25,
      textAlign: 'center',
    },
    Touchabled6eb9a0b: { width: '40%' },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View2a645ab7: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 20,
      width: '100%',
    },
    View7eebc22d: { height: '100%', justifyContent: 'center' },
    View8f0b3cf1: { marginTop: 35, paddingLeft: 20, paddingRight: 20 },
    View9838ce67: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_3'],
      borderRadius: 16,
      height: 353,
      justifyContent: 'center',
      marginLeft: 24,
      marginRight: 24,
    },
    Viewd3558808: {
      justifyContent: 'center',
      marginTop: 60,
      paddingBottom: 10,
      paddingTop: 30,
    },
    Viewdfdd7737: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_2'],
      justifyContent: 'center',
    },
    Viewe88e6c5a: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
    },
    Viewea9c7d25: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 20,
      height: 46,
      justifyContent: 'center',
    },
    Vieweccf3c7c: {
      backgroundColor: theme.colors['Custom Color'],
      height: '100%',
      opacity: 0.7,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(EnterOTPScreen);
