import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasTopSafeArea={true}
      hasSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewaa923d11}>
        {/* Back Click */}
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
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Forgot Password'}</Text>
      </View>
      {/* Disclaimer */}
      <View style={styles(theme).Viewe80946ed}>
        <Touchable>
          <Icon
            size={24}
            name={'MaterialIcons/info'}
            color={theme.colors['Custom Color_2']}
          />
        </Touchable>

        <Text style={styles(theme).Text1d6fff49}>
          {
            'We will send the OTP code to your email for \nsecurity in forgetting your password'
          }
        </Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollViewd329b5dbContent
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Email */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Text9d1d2a64}>{'Email'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'Email',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput1121c354}
            placeholder={'someone@draftbit.com'}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            defaultValue={Constants['Email']}
          />
        </View>
        {/* Submit */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button1e1b5ac2}
          title={'Submit'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button1e1b5ac2: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      height: 56,
      marginBottom: 40,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 25,
      textAlign: 'center',
    },
    KeyboardAwareScrollViewd329b5dbContent: {
      flex: 1,
      justifyContent: 'space-between',
    },
    Text1d6fff49: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 18,
      paddingLeft: 18,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text9d1d2a64: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      opacity: 1,
    },
    TextInput1121c354: {
      borderBottomWidth: 0.5,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 0.5,
      borderRadius: 8,
      borderRightWidth: 0.5,
      borderTopWidth: 0.5,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      height: 52,
      marginTop: 10,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 8,
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
    View78468a9e: { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewe80946ed: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_7'],
      borderRadius: 8,
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 8,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ForgotPasswordScreen);
