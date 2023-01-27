import React from 'react';
import {
  Button,
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PlaneDetailsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View9a65c7da}>
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
        <Text style={styles(theme).Text47c9b89f}>{'Today’s Plane'}</Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollView65be1cfeContent
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).View70ef5723}>
          {/* Plane Name */}
          <View>
            {/* Plane Name */}
            <Text style={styles(theme).Text930dafb8}>{'Plane Name'}</Text>
            {/* Plane Input */}
            <TextInput
              onChangeText={newPlaneInputValue => {
                try {
                  setTextInputValue(newPlaneInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput39f6b80f}
              value={textInputValue}
              placeholder={'Build leg muscles'}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Selected Date */}
          <View style={styles(theme).View02f8ec45}>
            {/* Selected date */}
            <Text style={styles(theme).Text930dafb8}>{'Selected'}</Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).DatePicker4d738bac}
              label={'Select Date'}
              date={datePickerValue}
              mode={'date'}
              leftIconMode={'inset'}
              rightIconName={'Feather/calendar'}
              type={'solid'}
            />
          </View>
          {/* Description */}
          <View style={styles(theme).View02f8ec45}>
            {/* Description */}
            <Text style={styles(theme).Text930dafb8}>{'Description'}</Text>
            <TextInput
              onChangeText={newTextAreaValue => {
                try {
                  setTextAreaValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInputbc3fda47}
              value={textAreaValue}
              placeholder={'Enter your plane name'}
              editable={true}
              textAlignVertical={'top'}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Save */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'WorkoutScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button5cde3bfe}
            title={'Save'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button5cde3bfe: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      bottom: 20,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '700',
      height: 56,
      left: 20,
      marginTop: 35,
      position: 'absolute',
      right: 20,
      textAlign: 'center',
    },
    DatePicker4d738bac: { color: theme.colors['Divider'], marginTop: 8 },
    KeyboardAwareScrollView65be1cfeContent: {
      flex: 1,
      marginBottom: 20,
      paddingBottom: 20,
    },
    Text46e916d2: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      opacity: 0.6,
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
    TextInput39f6b80f: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 5,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      height: 52,
      marginTop: 12,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 8,
    },
    TextInputbc3fda47: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      height: 140,
      lineHeight: 20,
      marginTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    View02f8ec45: { marginTop: 20 },
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
    View70ef5723: { flex: 1, marginTop: 35, paddingLeft: 20, paddingRight: 20 },
    View9a65c7da: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View9e7107b1: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 52,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(PlaneDetailsScreen);
