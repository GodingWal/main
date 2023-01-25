import React from 'react';
import {
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const NotificationSettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);

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
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Notifications'}</Text>
      </View>
      {/* Notification Settings */}
      <View style={styles(theme).View7602b1b1}>
        {/* Section Heading */}
        <Text style={styles(theme).Text2ae2dd41}>
          {'Messages Notifications'}
        </Text>
        {/* New Workout */}
        <View style={styles(theme).View480b12e2}>
          <Text style={styles(theme).Text0a326166}>{'New Workout'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
          />
        </View>
        {/* Added Friend */}
        <View style={styles(theme).View890f92e2}>
          <Text style={styles(theme).Text0a326166}>{'Added Friend'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
          />
        </View>
        {/* Message */}
        <View style={styles(theme).View890f92e2}>
          <Text style={styles(theme).Text0a326166}>{'Message'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
          />
        </View>
        {/* Complete Workout */}
        <View style={styles(theme).View8fbfba9b}>
          <Text style={styles(theme).Text0a326166}>{'Complete Workout'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text0a326166: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
    },
    Text2ae2dd41: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginBottom: 8,
      marginTop: 5,
      opacity: 0.6,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    View480b12e2: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_2'],
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
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
    View7602b1b1: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View890f92e2: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_2'],
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
    },
    View8fbfba9b: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
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
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(NotificationSettingsScreen);
