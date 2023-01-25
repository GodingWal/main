import React from 'react';
import {
  Circle,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SecurityScreen = props => {
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
            <Circle size={48} bgColor={theme.colors['Custom Color_2']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Security'}</Text>
      </View>
      {/* Security Settings */}
      <View style={styles(theme).View9c5a3808}>
        {/* Face ID */}
        <View style={styles(theme).View19f97d27}>
          <Text style={styles(theme).Text0a326166}>{'Face ID'}</Text>
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
        {/* Password */}
        <View style={styles(theme).View811c94a2}>
          <Text style={styles(theme).Text0a326166}>{'Remember Password'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            activeTrackColor={theme.colors['Custom Color_5']}
          />
        </View>
        {/* Touch ID */}
        <View style={styles(theme).View8fbfba9b}>
          <Text style={styles(theme).Text0a326166}>{'Touch ID'}</Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            activeTrackColor={theme.colors['Custom Color_5']}
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
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    View19f97d27: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
      marginTop: 12,
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
    View811c94a2: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
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
    View9c5a3808: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      paddingLeft: 12,
      paddingRight: 12,
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

export default withTheme(SecurityScreen);
