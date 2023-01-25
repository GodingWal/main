import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const HeightScreen = props => {
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
        <Text style={styles(theme).Text6a5d06ee}>{'Muscles'}</Text>
        {/* Tag Line */}
        <Text style={styles(theme).Text93688f70}>{'Exercise with style'}</Text>
        {/* Heading */}
        <Text style={styles(theme).Textcfbc2b28}>
          {'What is your height ?'}
        </Text>
        {/* Sub Heading */}
        <Text style={styles(theme).Textc01ce6d0}>
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Select height */}
        <Touchable style={styles(theme).Touchable02f8ec45}>
          <View style={styles(theme).Viewa45d5cfe}>
            <Text style={styles(theme).Text0a326166}>{'Select Height'}</Text>
            <Icon
              size={24}
              name={'Entypo/chevron-down'}
              color={theme.colors['Custom Color_2']}
            />
          </View>
        </Touchable>
        {/* Next button */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('LocationScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button9f6ee347}
          title={'Next'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button9f6ee347: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 28,
      fontFamily: 'Inter_700Bold',
      fontSize: 17,
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
    Text6a5d06ee: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'System',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: '700',
    },
    Text93688f70: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginTop: 4,
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

export default withTheme(HeightScreen);
