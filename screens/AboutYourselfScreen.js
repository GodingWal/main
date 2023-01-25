import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AboutYourselfScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

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
          {'Tell us about yourself'}
        </Text>
        {/* Sub Heading */}
        <Text style={styles(theme).Textc01ce6d0}>
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Gender */}
        <View style={styles(theme).View1324b9e2}>
          {/* Male */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'male',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchable48eb249d}
          >
            <View style={styles(theme).View5a62a7bc}>
              <Icon
                size={24}
                name={'FontAwesome/circle-thin'}
                color={theme.colors['Custom Color_2']}
              />
              <Text style={styles(theme).Textf26737df}>{'Male'}</Text>
              <>
                {!(Constants['Gender'] === 'male') ? null : (
                  <CircleImage
                    style={styles(theme).CircleImagebb88980b}
                    source={Images.Check}
                    size={24}
                  />
                )}
              </>
            </View>
          </Touchable>
          {/* Female */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'female',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchablec5292e26}
          >
            <View style={styles(theme).View5a62a7bc}>
              <Icon
                size={24}
                name={'FontAwesome/circle-thin'}
                color={theme.colors['Custom Color_2']}
              />
              <Text style={styles(theme).Text21154f6b}>{'Female'}</Text>
              <>
                {!(Constants['Gender'] === 'female') ? null : (
                  <CircleImage
                    style={styles(theme).CircleImagebb88980b}
                    source={Images.Check}
                    size={24}
                  />
                )}
              </>
            </View>
          </Touchable>
        </View>
        {/* Next */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('HeightScreen');
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
    CircleImagebb88980b: { left: 10, position: 'absolute' },
    Text21154f6b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginLeft: 15,
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
    Textf26737df: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginLeft: 15,
    },
    Touchable48eb249d: { marginTop: 20, width: '45%' },
    Touchablec5292e26: { marginLeft: '5%', marginTop: 20, width: '45%' },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View5a62a7bc: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 55,
      paddingLeft: 12,
      paddingRight: 12,
    },
    View720a4073: { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(AboutYourselfScreen);
