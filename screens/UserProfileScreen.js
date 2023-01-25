import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const UserProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

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

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <View style={styles(theme).View90b08e31}>
          <View>
            <Touchable>
              <CircleImage size={80} source={Images.UserImage} />
              <CircleImage
                style={styles(theme).CircleImagedb94945b}
                size={80}
                source={{ uri: `${Constants['ProfilePicture']}` }}
              />
            </Touchable>
          </View>

          <Text style={styles(theme).Text495ea0ba}>{'Arvind Limba'}</Text>

          <Text style={styles(theme).Text45bfda0e}>{'A Sports Lover'}</Text>
        </View>
        {/* Actions */}
        <View style={styles(theme).Viewe64dff68}>
          <View style={styles(theme).View4e7df6a7}>
            <Touchable>
              <View style={styles(theme).View7d6a39b7}>
                <Icon
                  name={'Entypo/plus'}
                  size={20}
                  color={theme.colors['Custom Color_2']}
                />
                <Text style={styles(theme).Textceb16e89}>{'Follow'}</Text>
              </View>
            </Touchable>
          </View>

          <View style={styles(theme).View5236b279}>
            <Touchable>
              <View style={styles(theme).View7d6a39b7}>
                <Icon
                  size={20}
                  color={theme.colors['Custom Color_8']}
                  name={'Feather/plus-square'}
                />
                <Text style={styles(theme).Text3211b80e}>{'Message'}</Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Stats */}
        <View style={styles(theme).View5a40e0fc}>
          <View style={styles(theme).Viewf3220d8d}>
            <View style={styles(theme).View062c7fcd}>
              <Image
                style={styles(theme).Image9e5973b7}
                resizeMode={'cover'}
                source={Images.BxVideoRecording1}
              />
            </View>

            <View style={styles(theme).Viewbb0f8ef9}>
              <Text style={styles(theme).Text0f23b2dd}>{'Workout'}</Text>

              <Text style={styles(theme).Textedeed6d6}>{'153'}</Text>
            </View>
          </View>

          <View style={styles(theme).Viewf3220d8d}>
            <View style={styles(theme).View6dfa0157}>
              <Image
                style={styles(theme).Image9e5973b7}
                resizeMode={'cover'}
                source={Images.BxsHot1}
              />
            </View>

            <View style={styles(theme).Viewbb0f8ef9}>
              <Text style={styles(theme).Text0f23b2dd}>{'Calories'}</Text>

              <Text style={styles(theme).Textedeed6d6}>{'320'}</Text>
            </View>
          </View>
        </View>
        {/* Report */}
        <View style={styles(theme).View536fe37f}>
          <Text style={styles(theme).Text495ea0ba}>{"Today's Report"}</Text>

          <View style={styles(theme).View43f90d47}>
            <View style={styles(theme).Viewc992f941}>
              <View style={styles(theme).View19e87b76}>
                <View style={styles(theme).View30dd9796}>
                  <Circle size={30} bgColor={theme.colors['Custom Color_2']} />
                </View>

                <View style={styles(theme).View4f1e235b}>
                  <Image
                    style={styles(theme).Image492bf3f8}
                    resizeMode={'cover'}
                    source={Images.BxsHot1}
                  />
                </View>

                <Text style={styles(theme).Text6bd015ff}>
                  {'Calories Burned'}
                </Text>

                <Text style={styles(theme).Textd9307414}>
                  {'245'}
                  <Text style={styles(theme).Textdcff2d4c}>{'Kcal'}</Text>
                </Text>
              </View>

              <View style={styles(theme).View85beb857}>
                <View style={styles(theme).View30dd9796}>
                  <Circle size={30} bgColor={theme.colors['Custom Color_2']} />
                </View>

                <View style={styles(theme).View4f1e235b}>
                  <Image
                    style={styles(theme).Image492bf3f8}
                    resizeMode={'cover'}
                    source={Images.BxsBowlRice1}
                  />
                </View>

                <Text style={styles(theme).Text6bd015ff}>{'Carbohydrate'}</Text>

                <Text style={styles(theme).Textd9307414}>
                  {'123'}
                  <Text style={styles(theme).Textdcff2d4c}>{'Gram'}</Text>
                </Text>
              </View>
            </View>

            <View style={styles(theme).View041aa74e}>
              <View style={styles(theme).View6616953c}>
                <View style={styles(theme).View30dd9796}>
                  <Circle size={30} bgColor={theme.colors['Custom Color_2']} />
                </View>

                <View style={styles(theme).View4f1e235b}>
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'AntDesign/heart'}
                    size={15}
                  />
                </View>

                <Text style={styles(theme).Text6bd015ff}>{'Heart Rate'}</Text>

                <Text style={styles(theme).Textd9307414}>
                  {'78'}
                  <Text style={styles(theme).Textdcff2d4c}>{'Bpm'}</Text>
                </Text>
              </View>

              <View style={styles(theme).View329f3b23}>
                <View style={styles(theme).View30dd9796}>
                  <Circle size={30} bgColor={theme.colors['Custom Color_2']} />
                </View>

                <View style={styles(theme).View4f1e235b}>
                  <Image
                    style={styles(theme).Image6d58508a}
                    resizeMode={'cover'}
                    source={Images.BxDumbbell}
                  />
                </View>

                <Text style={styles(theme).Text6bd015ff}>{'Workout'}</Text>

                <Text style={styles(theme).Textd9307414}>
                  {'53'}
                  <Text style={styles(theme).Textdcff2d4c}>{'Video'}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImagedb94945b: { position: 'absolute' },
    Image492bf3f8: { height: 16, width: 16 },
    Image6d58508a: { height: 16, position: 'absolute', width: 16 },
    Image9e5973b7: { height: 24, width: 24 },
    Text0f23b2dd: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 11,
      marginLeft: 6,
      opacity: 0.5,
    },
    Text3211b80e: {
      color: theme.colors['Custom Color_8'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 6,
    },
    Text45bfda0e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginTop: 6,
      opacity: 0.5,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text495ea0ba: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginTop: 16,
      opacity: 1,
    },
    Text6bd015ff: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      marginTop: 10,
      opacity: 1,
    },
    Textceb16e89: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 6,
    },
    Textd9307414: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 22,
      marginTop: 4,
    },
    Textdcff2d4c: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginLeft: 6,
      marginTop: 4,
    },
    Textedeed6d6: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 21,
      marginLeft: 6,
      marginTop: 4,
    },
    View041aa74e: { flex: 1, marginLeft: 20 },
    View062c7fcd: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_9'],
      borderRadius: 8,
      height: 50,
      justifyContent: 'center',
      width: 50,
    },
    View19e87b76: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Custom Color_10'],
      borderRadius: 8,
      flex: 1,
      height: 111,
      justifyContent: 'center',
      marginTop: 16,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingTop: 12,
    },
    View30dd9796: { opacity: 0.38 },
    View329f3b23: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Custom Color_13'],
      borderRadius: 8,
      flex: 1,
      height: 111,
      justifyContent: 'center',
      marginTop: 16,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingTop: 12,
    },
    View43f90d47: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    View4e7df6a7: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 8,
      height: 40,
      justifyContent: 'center',
      width: 111,
    },
    View4f1e235b: {
      alignItems: 'center',
      height: 30,
      justifyContent: 'center',
      left: 20,
      position: 'absolute',
      top: 12,
      width: 30,
    },
    View5236b279: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_8'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 40,
      justifyContent: 'center',
      marginLeft: 20,
      width: 111,
    },
    View536fe37f: {
      alignItems: 'flex-start',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
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
    View5a40e0fc: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30,
    },
    View6616953c: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Custom Color_11'],
      borderRadius: 8,
      flex: 1,
      height: 111,
      justifyContent: 'center',
      marginTop: 16,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingTop: 12,
    },
    View6dfa0157: {
      alignItems: 'center',
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 8,
      height: 50,
      justifyContent: 'center',
      width: 50,
    },
    View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
    View85beb857: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Custom Color_12'],
      borderRadius: 8,
      flex: 1,
      height: 111,
      justifyContent: 'center',
      marginTop: 16,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingTop: 12,
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
    Viewbb0f8ef9: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 4,
      marginTop: 5,
    },
    Viewc992f941: { flex: 1 },
    Viewe64dff68: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Viewf3220d8d: {
      alignItems: 'flex-start',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(UserProfileScreen);
