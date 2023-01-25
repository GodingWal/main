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

const ChangePasswordScreen = props => {
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
        <Text style={styles(theme).Text47c9b89f}>{'Change Password'}</Text>
      </View>
      {/* Disclaimer */}
      <View style={styles(theme).Viewd93cab0e}>
        <Text style={styles(theme).Text40153c0a}>
          {'The new password must be different from the current password'}
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
        {/* Form */}
        <View>
          {/* Password */}
          <View style={styles(theme).View78468a9e}>
            <Text style={styles(theme).Text9d1d2a64}>{'Password'}</Text>
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
              placeholder={'******'}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
              secureTextEntry={true}
              defaultValue={Constants['Email']}
            />
          </View>

          <Text style={styles(theme).Text58bc64d9}>
            {'✔  There must be at least 8 characters'}
          </Text>

          <Text style={styles(theme).Text58bc64d9}>
            {'✔  There must be a unique code like @!#'}
          </Text>
          {/* Confirm Password */}
          <View style={styles(theme).View78468a9e}>
            <Text style={styles(theme).Text9d1d2a64}>{'Confirm Password'}</Text>
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
              placeholder={'******'}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
              secureTextEntry={true}
              defaultValue={Constants['Email']}
            />
          </View>
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
          style={styles(theme).Button833570dc}
          title={'Submit'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button833570dc: {
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
    Text40153c0a: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      lineHeight: 21,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text58bc64d9: {
      color: theme.colors['App Green'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 20,
      marginTop: 12,
      opacity: 1,
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
    Viewd93cab0e: {
      alignItems: 'center',
      borderRadius: 8,
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 8,
      paddingBottom: 12,
      paddingTop: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ChangePasswordScreen);
