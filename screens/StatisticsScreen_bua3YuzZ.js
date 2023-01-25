import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const StatisticsScreen_bua3YuzZ = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasTopSafeArea={true}
      hasSafeArea={false}
    >
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <View style={styles(theme).View90b08e31}>
          <View>
            <CircleImage size={80} source={Images.UserImage} />
            <CircleImage
              style={styles(theme).CircleImagedb94945b}
              size={80}
              source={{ uri: `${Constants['ProfilePicture']}` }}
            />
            <View style={styles(theme).View10fffed7}>
              <Circle bgColor={theme.colors['App Green']} size={15} />
            </View>
          </View>

          <Text style={styles(theme).Text495ea0ba}>{'Arvind Limba'}</Text>

          <Text style={styles(theme).Text45bfda0e}>{'A Sports Lover'}</Text>
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
    Text45bfda0e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginTop: 6,
      opacity: 0.5,
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
    View10fffed7: { position: 'absolute', right: 5, top: 5 },
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
    View4f1e235b: {
      alignItems: 'center',
      height: 30,
      justifyContent: 'center',
      left: 20,
      position: 'absolute',
      top: 12,
      width: 30,
    },
    View536fe37f: {
      alignItems: 'flex-start',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
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
    Viewbb0f8ef9: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 4,
      marginTop: 5,
    },
    Viewc992f941: { flex: 1 },
    Viewf3220d8d: {
      alignItems: 'flex-start',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(StatisticsScreen_bua3YuzZ);
