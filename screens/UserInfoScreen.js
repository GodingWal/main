import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserInfoScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [ImageModal, setImageModal] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
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
        <Text style={styles(theme).Text47c9b89f}>{'User Info'}</Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Profile Picture */}
        <View style={styles(theme).View90b08e31}>
          <View>
            <Touchable
              onPress={() => {
                try {
                  setImageModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* User Image */}
              <CircleImage size={100} source={Images.UserImage} />
              {/* User Image */}
              <CircleImage
                style={styles(theme).CircleImagedb94945b}
                size={100}
                source={{ uri: `${Constants['ProfilePicture']}` }}
              />
              {/* Edit Icon */}
              <CircleImage
                style={styles(theme).CircleImage84fb306c}
                source={Images.Edit}
                size={32}
              />
            </Touchable>
          </View>
        </View>
        {/* First Name */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Text76ec2013}>{'First Name'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'FirstName',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput1121c354}
            placeholder={'Jon'}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            defaultValue={Constants['FirstName']}
          />
        </View>
        {/* Last Name */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Textb0bdc82b}>{'Last Name'}</Text>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'LastName',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInputd802257b}
            placeholder={'Doe'}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            defaultValue={Constants['LastName']}
          />
        </View>
        {/* Email */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Text76ec2013}>{'Email'}</Text>
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
            placeholder={'someone@draftbit.com'}
            editable={true}
            placeholderTextColor={theme.colors['Light']}
            defaultValue={Constants['Email']}
          />
        </View>
        {/* Gender */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Text76ec2013}>{'Gender'}</Text>

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
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                />
                <Text style={styles(theme).Text76de0594}>{'Male'}</Text>
                <>
                  {!(Constants['Gender'] === 'male') ? null : (
                    <CircleImage
                      style={styles(theme).CircleImage91686f72}
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
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                />
                <Text style={styles(theme).Text76de0594}>{'Female'}</Text>
                <>
                  {!(Constants['Gender'] === 'female') ? null : (
                    <CircleImage
                      style={styles(theme).CircleImage91686f72}
                      source={Images.Check}
                      size={24}
                    />
                  )}
                </>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Location */}
        <View style={styles(theme).View78468a9e}>
          <Text style={styles(theme).Text76ec2013}>{'Location'}</Text>
          <TextInput
            onChangeText={newTextAreaValue => {
              try {
                setGlobalVariableValue({
                  key: 'Location',
                  value: newTextAreaValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput89102245}
            placeholder={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            }
            editable={true}
            textAlignVertical={'top'}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor={theme.colors['Light']}
            defaultValue={Constants['Location']}
          />
        </View>
        {/* Save Changes */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button01024614}
          title={'Save Changes'}
        />
      </KeyboardAwareScrollView>

      <Modal visible={ImageModal} animationType={'none'} transparent={true}>
        <View style={styles(theme).View2200bac7}>
          <Touchable
            onPress={() => {
              try {
                setImageModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchablea98db7de}
          >
            <View style={styles(theme).View5d81b46b} />
          </Touchable>

          <View style={styles(theme).Viewaca9b7ae}>
            <Text style={styles(theme).Text0f883b8c}>
              {'Change your picture'}
            </Text>

            <View style={styles(theme).Viewe5a5e6ce}>
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const img = await Utils.openCamera({});
                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                      setImageModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={styles(theme).Touchable91805b00}
              >
                <View style={styles(theme).View87e3916c}>
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'Ionicons/camera'}
                    size={22}
                  />
                  <Text style={styles(theme).Text0b64f901}>
                    {'Take a photo'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      setImageModal(false);
                      const img = await Utils.openImagePicker({});
                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={styles(theme).Touchable91805b00}
              >
                <View style={styles(theme).View87e3916c}>
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    size={22}
                    name={'MaterialCommunityIcons/folder-open'}
                  />
                  <Text style={styles(theme).Text0b64f901}>
                    {'Choose from your file'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setImageModal(false);
                    setGlobalVariableValue({
                      key: 'ProfilePicture',
                      value: '',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Touchable91805b00}
              >
                <View style={styles(theme).View87e3916c}>
                  <Icon
                    size={22}
                    name={'Entypo/trash'}
                    color={theme.colors['Custom Color_8']}
                  />
                  <Text style={styles(theme).Text41381594}>
                    {'Delete Photo'}
                  </Text>
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
    Button01024614: {
      backgroundColor: theme.colors['Custom Color_16'],
      borderRadius: 24,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      height: 56,
      marginBottom: 35,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 25,
      textAlign: 'center',
    },
    CircleImage84fb306c: { bottom: 0, position: 'absolute', right: 0 },
    CircleImage91686f72: { left: 12, position: 'absolute' },
    CircleImagedb94945b: { position: 'absolute' },
    Text0b64f901: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginLeft: 16,
    },
    Text0f883b8c: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 21,
      marginTop: 25,
    },
    Text41381594: {
      color: theme.colors['Custom Color_8'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginLeft: 16,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text76de0594: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      marginLeft: 15,
    },
    Text76ec2013: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      opacity: 0.8,
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
    TextInput89102245: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_300Light',
      height: 120,
      lineHeight: 20,
      marginTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    TextInputd802257b: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
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
    Textb0bdc82b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      opacity: 0.8,
    },
    Touchable48eb249d: { marginTop: 20, width: '45%' },
    Touchable91805b00: { marginTop: 25 },
    Touchablea98db7de: { height: '100%', width: '100%' },
    Touchablec5292e26: { marginLeft: '5%', marginTop: 20, width: '45%' },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View2200bac7: { height: '100%' },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
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
    View5d81b46b: {
      backgroundColor: theme.colors['Custom Color'],
      height: '100%',
      opacity: 0.7,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    View78468a9e: { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
    View87e3916c: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_7'],
      borderColor: theme.colors['Custom Color_8'],
      borderRadius: 8,
      flexDirection: 'row',
      height: 60,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View90b08e31: { alignItems: 'center', marginTop: 30 },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewaca9b7ae: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_3'],
      borderRadius: 16,
      left: 24,
      marginTop: '25%',
      paddingBottom: 20,
      position: 'absolute',
      right: 24,
      zIndex: 1,
    },
    Viewe5a5e6ce: {
      borderColor: theme.colors['Custom Color_4'],
      borderTopWidth: 1,
      justifyContent: 'space-evenly',
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(UserInfoScreen);
