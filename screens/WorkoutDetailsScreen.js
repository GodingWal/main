import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Icon,
  Link,
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

const WorkoutDetailsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView968d0eb6Content}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <Image
          style={styles(theme).Image8b0df29b}
          resizeMode={'cover'}
          source={Images.Rectangle22440}
        />
        {/* Details */}
        <View style={styles(theme).Viewb1be3d60}>
          <Text style={styles(theme).Text7eaa687c}>{'Up and Down Stairs'}</Text>

          <View style={styles(theme).View0bec0c32}>
            {/* Left View */}
            <View style={styles(theme).View57e6ddad}>
              <View style={styles(theme).View1d41c3a4}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.BxStopwatch1}
                />
              </View>

              <Text style={styles(theme).Textf46ce586}>{'59  minutes'}</Text>
            </View>
            {/* Right View */}
            <View style={styles(theme).View57e6ddad}>
              <View style={styles(theme).View1d41c3a4}>
                <Image
                  style={styles(theme).Image9e5973b7}
                  resizeMode={'cover'}
                  source={Images.BxVideoRecording1}
                />
              </View>

              <Text style={styles(theme).Text80416168}>{'9 Step Videos'}</Text>
            </View>
          </View>
        </View>
        {/* Users Joined */}
        <View style={styles(theme).Viewb1be3d60}>
          {/* User count */}
          <Text style={styles(theme).Text71257b7d}>
            {'120+ People have joined'}
          </Text>

          <DraftbitExampleDataApi.FetchUsersGET limit={7}>
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
                  listKey={'garUjVbz'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <CircleImage
                        style={styles(theme).CircleImage27d4405a}
                        source={{ uri: `${listData?.avatar}` }}
                        size={48}
                      />
                    );
                  }}
                  style={styles(theme).FlatList989db244}
                  contentContainerStyle={styles(theme).FlatListdebd3207Content}
                  numColumns={1}
                  inverted={false}
                  horizontal={true}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
        {/* Description */}
        <View style={styles(theme).Viewb1be3d60}>
          {/* Heading */}
          <Text style={styles(theme).Textf5f797c0}>{'Description'}</Text>
          {/* Details */}
          <Text style={styles(theme).Text5e217cf0}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
            }
          </Text>
        </View>
        {/* Workout List */}
        <View style={styles(theme).Viewd11808c7}>
          <View style={styles(theme).View4e96e6e5}>
            <Text style={styles(theme).Text23beeba4}>{'List Videos'}</Text>
          </View>

          <View style={styles(theme).View7dea9e07}>
            <DraftbitExampleDataApi.FetchUsersGET limit={2}>
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
                    listKey={'MSaydocL'}
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
      {/* Header */}
      <View style={styles(theme).View2797f49b}>
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
        <Text style={styles(theme).Text47c9b89f}>{'Workout Detail'}</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage27d4405a: { marginRight: 8 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    FlatListdebd3207Content: { flexDirection: 'row' },
    Image89fafeca: { height: 36, width: 36 },
    Image8b0df29b: { height: 260, width: '100%' },
    Image9e5973b7: { height: 24, width: 24 },
    Imaged8c70a6d: { height: 80, width: 70 },
    Linka8d7e93d: { color: theme.colors['GetFit Orange'] },
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
    Text23beeba4: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
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
    Text71257b7d: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      marginBottom: 16,
    },
    Text7eaa687c: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 22,
    },
    Text80416168: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      marginLeft: 10,
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
    Textf46ce586: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      marginLeft: 10,
      opacity: 0.5,
    },
    Textf5f797c0: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Touchable6728d304: { marginTop: 16 },
    View0bec0c32: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 10,
    },
    View1d41c3a4: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_7'],
      borderRadius: 8,
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    View2797f49b: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      left: 0,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    View2d92a5f5: { borderRadius: 10, overflow: 'hidden' },
    View3126297f: { flex: 1, marginLeft: 16, marginRight: 16 },
    View4e96e6e5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 24,
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
    View57e6ddad: { alignItems: 'center', flexDirection: 'row', marginTop: 22 },
    View59437878: { alignItems: 'flex-start', flex: 1, flexDirection: 'row' },
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
    Viewb1be3d60: { marginTop: 30, paddingLeft: 20, paddingRight: 20 },
    Viewccae4e5d: {
      alignItems: 'center',
      borderRadius: 8,
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-between',
    },
    Viewd11808c7: { marginTop: 30 },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(WorkoutDetailsScreen);
