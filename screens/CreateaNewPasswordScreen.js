import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateaNewPasswordScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
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
        <Text style={styles(theme).Text47c9b89f}>{'Create New Password'}</Text>
      </View>
      {/* heading texts */}
      <View style={styles(theme).View217fbc38}>
        {/* Title */}
        <Text style={styles(theme).Text4b46317f}>
          {'Create a\nNew Password'}
        </Text>
        {/* sub title */}
        <Text style={styles(theme).Text4b30a0a5}>
          {'Enter your new password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).Viewc179434f}>
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
                value={textInputValue}
                placeholder={'Create a password'}
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
            {/* Confirm Password */}
            <Text style={styles(theme).Textf258193b}>{'Confirm Password'}</Text>

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
                value={textInputValue}
                placeholder={'Confirm password'}
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
          {/* Next */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('LoginEmailScreen');
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
    Image9e5973b7: { height: 24, width: 24 },
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
    Textf258193b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      marginTop: 16,
    },
    View217fbc38: { paddingBottom: 25, paddingTop: 25 },
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

export default withTheme(CreateaNewPasswordScreen);
