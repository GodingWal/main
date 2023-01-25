import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const TodaysPlaneAllScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
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
            <Circle size={50} bgColor={theme.colors['Custom Color']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color_2']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{"All Today's Plane "}</Text>
      </View>

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView968d0eb6Content}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        {/* DateView */}
        <View style={styles(theme).View0aded584}>
          <DatePicker
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).DatePicker4eefb544}
            date={datePickerValue}
            label={'Date'}
            mode={'date'}
            leftIconMode={'inset'}
            type={'underline'}
            rightIconName={'Feather/calendar'}
          />
        </View>
        {/* Description */}
        <View style={styles(theme).View1dfa35db}>
          <View style={styles(theme).Viewdef7bec7}>
            {/* Heading */}
            <Text style={styles(theme).Textf5f797c0}>
              {'Build Leg Muscles'}
            </Text>

            <View style={styles(theme).View6d3d58b1}>
              <Touchable>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.EditSquare}
                />
              </Touchable>
            </View>
          </View>
          {/* Details */}
          <Text style={styles(theme).Text5e217cf0}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
            }
          </Text>
        </View>
        {/* Workout List */}
        <View style={styles(theme).View6728d304}>
          <View style={styles(theme).View7dea9e07}>
            <DraftbitExampleDataApi.FetchUsersGET limit={10}>
              {({ loading, error, data, refetchUsers }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <FlatList
                    data={fetchData}
                    listKey={'Vw41UV1b'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('PlayWorkoutPlaylistScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles(theme).Touchable6728d304}
                        >
                          <View style={styles(theme).Viewccae4e5d}>
                            <View style={styles(theme).View59437878}>
                              <View style={styles(theme).View2d92a5f5}>
                                <Image
                                  style={styles(theme).Imaged8c70a6d}
                                  resizeMode={'cover'}
                                  source={Images.CategoryHand}
                                />
                              </View>

                              <View style={styles(theme).View3126297f}>
                                <Text style={styles(theme).Text07f68878}>
                                  {'Doing leg stretch'}
                                </Text>

                                <Text style={styles(theme).Textda5c1871}>
                                  {'Finish this exercise in 15 minutes'}
                                </Text>
                              </View>
                            </View>

                            <View style={styles(theme).View6d3d58b1}>
                              <Touchable>
                                <Image
                                  style={styles(theme).Image89fafeca}
                                  resizeMode={'cover'}
                                  source={Images.Progress}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      );
                    }}
                    style={styles(theme).FlatList989db244}
                    contentContainerStyle={
                      styles(theme).FlatListc992f941Content
                    }
                    numColumns={1}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchUsersGET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    DatePicker4eefb544: { color: theme.colors['Custom #ffffff'] },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Image89fafeca: { height: 36, width: 36 },
    Image9e5973b7: { height: 24, width: 24 },
    Imaged8c70a6d: { height: 80, width: 70 },
    ScrollView968d0eb6Content: {
      left: 0,
      paddingBottom: 30,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    Text07f68878: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
      marginTop: 10,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text5e217cf0: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_300Light',
      lineHeight: 20,
      marginTop: 8,
      opacity: 0.5,
    },
    Textda5c1871: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 17,
      marginTop: 8,
      opacity: 0.5,
    },
    Textf5f797c0: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Touchable6728d304: { marginTop: 16 },
    View0aded584: {
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 8,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    View1dfa35db: { marginTop: 16, paddingLeft: 20, paddingRight: 20 },
    View2d92a5f5: { borderRadius: 10, overflow: 'hidden' },
    View3126297f: { flex: 1, marginLeft: 16, marginRight: 16 },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    View59437878: { alignItems: 'flex-start', flex: 1, flexDirection: 'row' },
    View6728d304: { marginTop: 16 },
    View6d3d58b1: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View7dea9e07: {
      justifyContent: 'space-evenly',
      marginTop: 8,
      overflow: 'hidden',
      paddingLeft: 20,
      paddingRight: 20,
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
    Viewccae4e5d: {
      alignItems: 'center',
      borderRadius: 8,
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-between',
    },
    Viewdef7bec7: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
    },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(TodaysPlaneAllScreen);
