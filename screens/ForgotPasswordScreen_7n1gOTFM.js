import React from 'react';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordScreen_7n1gOTFM = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).Viewaa923d11}>
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
        <Text style={styles(theme).Text47c9b89f}>{'Forgot Password'}</Text>
      </View>
      {/* heading texts */}
      <View style={styles(theme).View217fbc38}>
        {/* Title */}
        <Text style={styles(theme).Text4b46317f}>{'Forgot Password'}</Text>
        {/* sub title */}
        <Text style={styles(theme).Text4b30a0a5}>
          {'Recover your account password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).Viewc179434f}>
          {/* Email */}
          <Text style={styles(theme).Text930dafb8}>{'Email'}</Text>
          {/* Email Input */}
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setTextInputValue(newEmailInputValue);
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
          {/* Next */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('CreateaNewPasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button8ac5ba49}
            title={'Next'}
          />
        </View>
      </KeyboardAwareScrollView>
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
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
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
    View217fbc38: { paddingBottom: 25, paddingTop: 25 },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewc179434f: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ForgotPasswordScreen_7n1gOTFM);
