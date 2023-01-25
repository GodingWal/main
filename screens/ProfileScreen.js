import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
  CircleImage,
  Divider,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [LogoutModal, setLogoutModal] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* User Details */}
      <View style={styles(theme).View24ed538c}>
        <View style={styles(theme).Viewdebd3207}>
          <CircleImage size={56} source={Images.UserImage} />
          <CircleImage
            style={styles(theme).CircleImagedb94945b}
            size={56}
            source={{ uri: `${Constants['ProfilePicture']}` }}
          />
          <View style={styles(theme).View5d1f5847}>
            {/* Full Name */}
            <Text style={styles(theme).Text2dae52c6}>{'Arvind Limba'}</Text>
            {/* username */}
            <Text style={styles(theme).Text44de12c3}>{'@awi21589'}</Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UserInfoScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles(theme).View3429b87c}>
            <Image
              style={styles(theme).Image9e5973b7}
              resizeMode={'cover'}
              source={Images.EditSquare}
            />
          </View>
        </Touchable>
      </View>

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Stats View */}
        <View style={styles(theme).View113227c7}>
          <View style={styles(theme).View0f2064c6}>
            {/* Weight */}
            <View style={styles(theme).View2df72ea7}>
              <View>
                <Text style={styles(theme).Textafa2cbb6}>{'Weight'}</Text>

                <View style={styles(theme).View3ce07d2b}>
                  <Text style={styles(theme).Textd51d9242}>{'89'}</Text>

                  <Text style={styles(theme).Text5321923a}>{'Kg'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Divider8226a2b9}
                color={theme.colors['Custom Color_2']}
              />
            </View>
            {/* Height */}
            <View style={styles(theme).View2df72ea7}>
              <View>
                <Text style={styles(theme).Textafa2cbb6}>{'Height'}</Text>

                <View style={styles(theme).View3ce07d2b}>
                  <Text style={styles(theme).Textbe3c5208}>{'169'}</Text>

                  <Text style={styles(theme).Textb18ab600}>{'Cm'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Divider8226a2b9}
                color={theme.colors['Custom Color_2']}
              />
            </View>
            {/* Todo Today */}
            <View style={styles(theme).View2df72ea7}>
              <View>
                <Text style={styles(theme).Textafa2cbb6}>{'Todo Today'}</Text>

                <View style={styles(theme).View3ce07d2b}>
                  <Text style={styles(theme).Textd51d9242}>{'45'}</Text>

                  <Text style={styles(theme).Textb18ab600}>{'%'}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Security */}
        <View style={styles(theme).View3a04e1d2}>
          {/* Section Heading */}
          <Text style={styles(theme).Text46cf448e}>{'security'}</Text>
          {/* Change Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ChangePasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).View57b69a79}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.IconLock}
                />
                <Text style={styles(theme).Text6f0572e1}>
                  {'Change password'}
                </Text>
              </View>
              <Icon
                size={24}
                name={'Feather/chevron-right'}
                color={theme.colors['Custom Color_2']}
              />
            </View>
          </Touchable>
          {/* Forgot Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ForgotPasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).View9baf98e8}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Unlock}
                />
                <Text style={styles(theme).Text4f586ef3}>
                  {'Forgot password'}
                </Text>
              </View>
              <Icon
                size={24}
                name={'Feather/chevron-right'}
                color={theme.colors['Custom Color_2']}
              />
            </View>
          </Touchable>
          {/* Securitty */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SecurityScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).Viewd644956a}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.ShieldDone}
                />
                <Text style={styles(theme).Text4f586ef3}>{'Security'}</Text>
              </View>
              <Icon
                size={24}
                name={'Feather/chevron-right'}
                color={theme.colors['Custom Color_2']}
              />
            </View>
          </Touchable>
        </View>
        {/* General */}
        <View style={styles(theme).Viewd62adfa2}>
          {/* Section Heading */}
          <Text style={styles(theme).Text46cf448e}>{'general'}</Text>
          {/* Language */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LanguageSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).View9baf98e8}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Globe}
                />
                <Text style={styles(theme).Text4f586ef3}>{'language'}</Text>
              </View>
              <Icon
                size={24}
                name={'Feather/chevron-right'}
                color={theme.colors['Custom Color_2']}
              />
            </View>
          </Touchable>
          {/* Clear Cache */}
          <Touchable>
            <View style={styles(theme).View57b69a79}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Layer2}
                />
                <Text style={styles(theme).Text4f586ef3}>{'clear cache'}</Text>
              </View>

              <Text style={styles(theme).Text256fb622}>{'88 MB'}</Text>
            </View>
          </Touchable>
        </View>
        {/* About */}
        <View style={styles(theme).Viewd62adfa2}>
          {/* Section Heading */}
          <Text style={styles(theme).Text46cf448e}>{'about'}</Text>
          {/* Legal And Policies */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LegalPoliciesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).View57b69a79}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Shield}
                />
                <Text style={styles(theme).Text6f0572e1}>
                  {'legal and policies'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                size={24}
                name={'Feather/chevron-right'}
              />
            </View>
          </Touchable>
          {/* Help & Support */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HelpandSupportScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).View9baf98e8}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Question}
                />
                <Text style={styles(theme).Text4f586ef3}>
                  {'help & support'}
                </Text>
              </View>
              <Icon
                size={24}
                color={theme.colors['Custom Color_2']}
                name={'Entypo/chevron-right'}
              />
            </View>
          </Touchable>
          {/* Dark Mode */}
          <Touchable>
            <View style={styles(theme).View57b69a79}>
              <View style={styles(theme).View7d6a39b7}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.Activity}
                />
                <Text style={styles(theme).Text4f586ef3}>{'dark mode'}</Text>
              </View>
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
          </Touchable>
        </View>
        {/* Log Out */}
        <Button
          onPress={() => {
            try {
              setLogoutModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button0f4c6e85}
          title={'Log Out'}
        />
      </ScrollView>

      <Modal visible={LogoutModal} animationType={'none'} transparent={true}>
        <View style={styles(theme).View7eebc22d}>
          <View style={styles(theme).Vieweccf3c7c} />
          <View style={styles(theme).View7a4ca2d2}>
            <Icon
              size={101}
              color={theme.colors['Custom Color_8']}
              name={'AntDesign/questioncircleo'}
            />
            <Text style={styles(theme).Text0f883b8c}>{'Are You Sure?'}</Text>

            <Text style={styles(theme).Text46b18ac6}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel'
              }
            </Text>

            <View style={styles(theme).Viewa4ea5eb5}>
              <Touchable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                    navigation.navigate('LoginEmailScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchabled6eb9a0b}
              >
                <View style={styles(theme).View30039672}>
                  <Text style={styles(theme).Text961611e4}>{'Log Out'}</Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchabled6eb9a0b}
              >
                <View style={styles(theme).Viewea9c7d25}>
                  <Text style={styles(theme).Text930dafb8}>{'Cancel'}</Text>
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
    Button0f4c6e85: {
      backgroundColor: theme.colors['Custom Color'],
      borderBottomWidth: 1,
      borderColor: theme.colors['GetFit Orange'],
      borderLeftWidth: 1,
      borderRadius: 32,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['GetFit Orange'],
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '700',
      height: 50,
      marginBottom: 25,
      marginLeft: 20,
      marginRight: 20,
      textAlign: 'center',
    },
    CircleImagedb94945b: { position: 'absolute' },
    Divider8226a2b9: {
      height: 40,
      opacity: 0.5,
      position: 'absolute',
      right: 0,
      width: 1,
    },
    Image9e5973b7: { height: 24, width: 24 },
    Text0f883b8c: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 21,
      marginTop: 25,
    },
    Text256fb622: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      opacity: 0.5,
      paddingLeft: 12,
      textTransform: 'none',
    },
    Text2dae52c6: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 17,
    },
    Text44de12c3: { color: theme.colors['Custom Color_2'], opacity: 0.5 },
    Text46b18ac6: {
      color: theme.colors['Custom Color_2'],
      marginTop: 4,
      opacity: 0.5,
      textAlign: 'center',
    },
    Text46cf448e: {
      color: theme.colors['Custom Color_2'],
      marginBottom: 12,
      paddingLeft: 20,
      paddingRight: 20,
      textTransform: 'capitalize',
    },
    Text4f586ef3: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      paddingLeft: 12,
      textTransform: 'capitalize',
    },
    Text5321923a: { color: theme.colors['Custom Color_2'], paddingLeft: 5 },
    Text6f0572e1: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      paddingLeft: 12,
      textTransform: 'capitalize',
    },
    Text930dafb8: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
    },
    Text961611e4: {
      color: theme.colors['Custom Color_8'],
      fontFamily: 'Inter_500Medium',
    },
    Textafa2cbb6: { color: theme.colors['Custom Color_2'], fontSize: 10 },
    Textb18ab600: { color: theme.colors['Custom Color_2'], marginLeft: 5 },
    Textbe3c5208: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
    },
    Textd51d9242: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
    },
    Touchabled6eb9a0b: { width: '40%' },
    View0f2064c6: {
      alignItems: 'center',
      borderRadius: 16,
      flexDirection: 'row',
      height: 109,
      justifyContent: 'space-evenly',
      opacity: 1,
    },
    View113227c7: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 21,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 15,
    },
    View24ed538c: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 25,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 10,
    },
    View2df72ea7: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    View30039672: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_8'],
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 46,
      justifyContent: 'center',
    },
    View3429b87c: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View3a04e1d2: { marginTop: 30, paddingBottom: 20 },
    View3ce07d2b: { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
    View57b69a79: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    View5d1f5847: { justifyContent: 'space-evenly', marginLeft: 12 },
    View7a4ca2d2: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_3'],
      borderRadius: 16,
      height: 353,
      justifyContent: 'center',
      marginLeft: 24,
      marginRight: 24,
    },
    View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
    View7eebc22d: { height: '100%', justifyContent: 'center' },
    View9baf98e8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    Viewa4ea5eb5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
      width: '100%',
    },
    Viewd62adfa2: { paddingBottom: 20 },
    Viewd644956a: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    Viewdebd3207: { flexDirection: 'row' },
    Viewea9c7d25: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_5'],
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

export default withTheme(ProfileScreen);
