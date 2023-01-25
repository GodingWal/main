import React from 'react';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Modal, StyleSheet, Text, View } from 'react-native';

const LocationScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [termsModal, setTermsModal] = React.useState(false);

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
          {'Location access required'}
        </Text>
        {/* Sub Heading */}
        <Text style={styles(theme).Textc01ce6d0}>
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Give Location Access */}
        <Button
          onPress={() => {
            try {
              setTermsModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Buttond53d5195}
          title={'Give Location Access'}
        />
      </View>

      <Modal visible={termsModal} animationType={'none'} transparent={true}>
        <View style={styles(theme).View7eebc22d}>
          <View style={styles(theme).Vieweccf3c7c} />
          <View style={styles(theme).View991d06fd}>
            <Text style={styles(theme).Text79d22ab5}>
              <Text style={styles(theme).Text9b740b53}>
                {'I agree to the '}
              </Text>

              <Text style={styles(theme).Textbd29776d}>
                {'Terms of Service'}
              </Text>

              <Text style={styles(theme).Text9b740b53}>{' and '}</Text>

              <Text style={styles(theme).Textbd29776d}>
                {'Conditions of Use'}
              </Text>

              <Text style={styles(theme).Text9b740b53}>
                {
                  ' including consent to electronic communications and I affirm that the information provided is my own.'
                }
              </Text>
              {null}
            </Text>

            <View style={styles(theme).Viewce992534}>
              <Touchable
                onPress={() => {
                  try {
                    setTermsModal(false);
                    navigation.navigate('UserInfoScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles(theme).View29590be9}>
                  <Text style={styles(theme).Text930dafb8}>
                    {'Agree and continue'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setTermsModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchable605f09cd}
              >
                <View style={styles(theme).Viewe9dbc8fb}>
                  <Text style={styles(theme).Text961611e4}>{'Disgree'}</Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttond53d5195: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 28,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 17,
      height: 55,
      marginTop: 40,
      textAlign: 'center',
    },
    Text6a5d06ee: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'System',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: '700',
    },
    Text79d22ab5: {
      color: theme.colors['Custom Color_2'],
      lineHeight: 20,
      marginTop: 4,
      opacity: 1,
      textAlign: 'center',
    },
    Text930dafb8: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
    },
    Text93688f70: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginTop: 4,
    },
    Text961611e4: {
      color: theme.colors['Custom Color_8'],
      fontFamily: 'Inter_500Medium',
    },
    Text9b740b53: {
      color: theme.colors['Custom Color_2'],
      lineHeight: 18,
      marginTop: 4,
      opacity: 0.5,
      textAlign: 'center',
    },
    Textbd29776d: {
      color: theme.colors['Custom Color_5'],
      lineHeight: 18,
      marginTop: 4,
      opacity: 1,
      textAlign: 'center',
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
    Touchable605f09cd: { marginTop: 20, width: '40%' },
    View29590be9: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 20,
      height: 46,
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
    },
    View720a4073: { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
    View7eebc22d: { height: '100%', justifyContent: 'center' },
    View991d06fd: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_3'],
      borderRadius: 16,
      justifyContent: 'center',
      marginLeft: 24,
      marginRight: 24,
      paddingBottom: 40,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 40,
    },
    Viewce992534: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 20,
      width: '100%',
    },
    Viewe9dbc8fb: {
      alignItems: 'center',
      borderRadius: 20,
      height: 46,
      justifyContent: 'center',
    },
    Vieweccf3c7c: {
      backgroundColor: theme.colors['Custom Color'],
      height: '100%',
      opacity: 0.7,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(LocationScreen);
