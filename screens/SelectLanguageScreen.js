import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SelectLanguageScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles(theme).View720a4073}>
        {/* App Name */}
        <Text style={styles(theme).Textbec46d9a}>{'Muscles'}</Text>
        {/* Tag Line */}
        <Text style={styles(theme).Text93688f70}>{'Exercise with style'}</Text>
        {/* Heading */}
        <Text style={styles(theme).Textcfbc2b28}>{'Select your Language'}</Text>
        {/* Sub Heading */}
        <Text style={styles(theme).Textc01ce6d0}>
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Select Language */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('LanguagesScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Touchable02f8ec45}
        >
          <View style={styles(theme).Viewa45d5cfe}>
            <Text style={styles(theme).Text0a326166}>
              {Constants['Language']}
            </Text>
            <Icon
              size={24}
              name={'Entypo/chevron-down'}
              color={theme.colors['Custom Color_2']}
            />
          </View>
        </Touchable>
        {/* Save Button */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AboutYourselfScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button192f46cf}
          title={'Save'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button192f46cf: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 28,
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: '600',
      height: 55,
      letterSpacing: 1.2,
      marginTop: 40,
      textAlign: 'center',
    },
    Text0a326166: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
    },
    Text93688f70: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginTop: 4,
    },
    Textbec46d9a: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'System',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: '700',
    },
    Textc01ce6d0: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      lineHeight: 18,
      marginTop: 8,
      opacity: 0.5,
    },
    Textcfbc2b28: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 23,
      marginTop: 50,
    },
    Touchable02f8ec45: { marginTop: 20 },
    View720a4073: { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
    Viewa45d5cfe: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
      paddingLeft: 12,
      paddingRight: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(SelectLanguageScreen);
