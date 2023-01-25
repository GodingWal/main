import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Divider,
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
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <ImageBackground
        style={styles(theme).ImageBackgrounda497f403}
        resizeMode={'cover'}
        source={Images.HomeBG}
      >
        <ScrollView
          style={styles(theme).ScrollView989db244}
          contentContainerStyle={styles(theme).ScrollViewb8a648aeContent}
          bounces={true}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles(theme).View0c9290ca}>
            <View>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UserProfileScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <CircleImage source={Images.UserImage} size={40} />
                <CircleImage
                  style={styles(theme).CircleImagedb94945b}
                  size={40}
                  source={{ uri: `${Constants['ProfilePicture']}` }}
                />
              </Touchable>
            </View>

            <View style={styles(theme).Viewdebd3207}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('MessageScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles(theme).View1a33c04f}>
                  <Icon
                    size={24}
                    name={'Ionicons/ios-chatbox-ellipses-outline'}
                    color={theme.colors['Custom Color_2']}
                  />
                  <View style={styles(theme).View232298cf} />
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('NotificationsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles(theme).View1a33c04f}>
                  <Icon
                    size={24}
                    color={theme.colors['Custom Color_2']}
                    name={'Ionicons/md-notifications-outline'}
                  />
                  <View style={styles(theme).View97da6709} />
                </View>
              </Touchable>
            </View>
          </View>
          {/* GreetView */}
          <View style={styles(theme).View37a3709d}>
            {/* Greet */}
            <Text style={styles(theme).Text2eb0ba25}>{'Hi, Arvind!'}</Text>
            {/* Question */}
            <Text style={styles(theme).Textb711ab1b}>
              {'Have you \nexercised today?'}
            </Text>
          </View>
          {/* Stats View */}
          <View style={styles(theme).View91805b00}>
            <View style={styles(theme).Viewdbfc1831} />
            <View style={styles(theme).View7ef21194}>
              <View style={styles(theme).View2df72ea7}>
                <View>
                  <Text style={styles(theme).Text5c26d2b1}>{'Weight'}</Text>

                  <View style={styles(theme).View3ce07d2b}>
                    <Text style={styles(theme).Text876a5940}>{'89'}</Text>

                    <Text style={styles(theme).Text5321923a}>{'Kg'}</Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Divider02a98fe2}
                  color={theme.colors['Custom Color_2']}
                />
              </View>

              <View style={styles(theme).View2df72ea7}>
                <View>
                  <Text style={styles(theme).Text5c26d2b1}>{'Height'}</Text>

                  <View style={styles(theme).View3ce07d2b}>
                    <Text style={styles(theme).Text876a5940}>{'169'}</Text>

                    <Text style={styles(theme).Textb18ab600}>{'Cm'}</Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Divider02a98fe2}
                  color={theme.colors['Custom Color_2']}
                />
              </View>

              <View style={styles(theme).View2df72ea7}>
                <View>
                  <Text style={styles(theme).Text5c26d2b1}>{'Todo Today'}</Text>

                  <View style={styles(theme).View3ce07d2b}>
                    <Text style={styles(theme).Text876a5940}>{'45'}</Text>

                    <Text style={styles(theme).Textb18ab600}>{'%'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Content */}
          <View style={styles(theme).Viewc6456ac2}>
            {/* Banner */}
            <View style={styles(theme).Viewd4efb37c}>
              <View style={styles(theme).Viewa85154f8}>
                {/* Title */}
                <Text style={styles(theme).Text23beeba4}>
                  {'Healthy life belongs \nto everyone'}
                </Text>
                {/* Start Exercising */}
                <View style={styles(theme).View1761b477}>
                  <Touchable>
                    <Text style={styles(theme).Text49ba5593}>
                      {'Start Exercising'}
                    </Text>
                  </Touchable>
                </View>
              </View>
              <Image
                style={styles(theme).Image5dfb8dbe}
                resizeMode={'cover'}
                source={
                  Images.PortraitSmilingAfroAmericanSportsManStretchingHisMuscularArmsBeforeWorkoutBySeaUsingMusicAppHisSmartphone1
                }
              />
            </View>
            {/* Category */}
            <View style={styles(theme).View834cacfd}>
              {/* Section Heading */}
              <Text style={styles(theme).Textb9c763c2}>{'Category'}</Text>

              <View style={styles(theme).View1324b9e2}>
                <Touchable style={styles(theme).Touchable6728d304}>
                  <View style={styles(theme).Viewa21e657c}>
                    <Image
                      style={styles(theme).Imagefb2b3c11}
                      resizeMode={'cover'}
                      source={Images.CategoryHand}
                    />
                  </View>

                  <View style={styles(theme).Viewf51d597e}>
                    <Text style={styles(theme).Text103462d1}>{'Hand'}</Text>
                  </View>
                </Touchable>

                <Touchable style={styles(theme).Touchable6728d304}>
                  <View style={styles(theme).View3811faa4}>
                    <Image
                      style={styles(theme).Imagefb2b3c11}
                      resizeMode={'cover'}
                      source={Images.Rectangle22429}
                    />
                  </View>

                  <View style={styles(theme).View65b7f8ad}>
                    <Text style={styles(theme).Text156ddc8e}>{'Legs'}</Text>
                  </View>
                </Touchable>

                <Touchable style={styles(theme).Touchable6728d304}>
                  <View style={styles(theme).View3811faa4}>
                    <Image
                      style={styles(theme).Imagefb2b3c11}
                      resizeMode={'cover'}
                      source={Images.Rectangle224291}
                    />
                  </View>

                  <View style={styles(theme).View65b7f8ad}>
                    <Text style={styles(theme).Text156ddc8e}>{'Jump'}</Text>
                  </View>
                </Touchable>

                <Touchable style={styles(theme).Touchable6728d304}>
                  <View style={styles(theme).View3811faa4}>
                    <Image
                      style={styles(theme).Imagefb2b3c11}
                      resizeMode={'cover'}
                      source={Images.Rectangle224293}
                    />
                  </View>

                  <View style={styles(theme).View65b7f8ad}>
                    <Text style={styles(theme).Text156ddc8e}>{'Yoga'}</Text>
                  </View>
                </Touchable>
              </View>
            </View>
            {/* Popular Workout */}
            <View style={styles(theme).View02f8ec45}>
              {/* Header */}
              <View style={styles(theme).View4e96e6e5}>
                {/* Section Heading */}
                <Text style={styles(theme).Text23beeba4}>
                  {'Popular Workout'}
                </Text>
                {/* See all */}
                <Link
                  onPress={() => {
                    try {
                      navigation.navigate('WorkoutListAllScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Link5c26d2b1}
                  title={'See all'}
                />
              </View>

              <View style={styles(theme).View4e04950f}>
                <ScrollView
                  style={styles(theme).ScrollView989db244}
                  contentContainerStyle={
                    styles(theme).ScrollViewc40c66aeContent
                  }
                  bounces={true}
                  showsVerticalScrollIndicator={false}
                  horizontal={true}
                >
                  <DraftbitExampleDataApi.FetchUsersGET limit={4}>
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
                          listKey={'MrY4Los5'}
                          keyExtractor={listData =>
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate('WorkoutDetailsScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles(theme).Touchable60b39fbb}
                              >
                                <View style={styles(theme).View44c98d02}>
                                  <View style={styles(theme).Viewb0ffb8f7}>
                                    <ImageBackground
                                      style={
                                        styles(theme).ImageBackground0a984f33
                                      }
                                      resizeMode={'cover'}
                                      source={Images.CategoryHand}
                                    >
                                      <FlatList
                                        data={Constants['Tags']}
                                        listKey={'1B2eMscU'}
                                        keyExtractor={listData =>
                                          listData?.id ||
                                          listData?.uuid ||
                                          JSON.stringify(listData)
                                        }
                                        renderItem={({ item }) => {
                                          const listData = item;
                                          return (
                                            <View
                                              style={styles(theme).View7bca3e44}
                                            >
                                              <Text
                                                style={
                                                  styles(theme).Text7e9f241c
                                                }
                                              >
                                                {listData}
                                              </Text>
                                            </View>
                                          );
                                        }}
                                        style={styles(theme).FlatList989db244}
                                        contentContainerStyle={
                                          styles(theme).FlatListdebd3207Content
                                        }
                                        numColumns={1}
                                        inverted={false}
                                        horizontal={false}
                                      />
                                    </ImageBackground>
                                  </View>

                                  <Text style={styles(theme).Text07f68878}>
                                    {'Up and Down Stairs'}
                                  </Text>

                                  <Text style={styles(theme).Text2aa54dc5}>
                                    {'Train your thighs and legs'}
                                  </Text>
                                </View>
                              </Touchable>
                            );
                          }}
                          style={styles(theme).FlatList989db244}
                          contentContainerStyle={
                            styles(theme).FlatList94bdd9d3Content
                          }
                          numColumns={1}
                          horizontal={true}
                        />
                      );
                    }}
                  </DraftbitExampleDataApi.FetchUsersGET>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      <View style={styles(theme).View1ae309ed}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('MakeTodaysPlaneScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle size={50} bgColor={theme.colors['Custom Color_5']}>
            <Icon
              size={24}
              name={'Feather/plus'}
              color={theme.colors['Custom Color_2']}
            />
          </Circle>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImagedb94945b: { position: 'absolute' },
    Divider02a98fe2: { height: 40, position: 'absolute', right: 0, width: 1 },
    Fetch431eb058: { minHeight: 40 },
    FlatList94bdd9d3Content: { flex: 1, flexDirection: 'row' },
    FlatListdebd3207Content: { flexDirection: 'row' },
    Image5dfb8dbe: {
      bottom: 0,
      height: 100,
      position: 'absolute',
      right: 0,
      width: 100,
    },
    ImageBackground0a984f33: { height: 128, width: 172 },
    ImageBackgrounda497f403: {
      backgroundColor: theme.colors['Custom Color'],
      height: '100%',
      width: '100%',
    },
    Imagefb2b3c11: { height: 100, width: 74 },
    Link5c26d2b1: { color: theme.colors['Custom Color_2'] },
    ScrollViewb8a648aeContent: { paddingBottom: 25 },
    ScrollViewc40c66aeContent: {
      paddingBottom: 20,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Text07f68878: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
      marginTop: 10,
    },
    Text103462d1: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
    },
    Text156ddc8e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
    },
    Text23beeba4: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
    },
    Text2aa54dc5: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginTop: 8,
      opacity: 0.5,
    },
    Text2eb0ba25: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 18,
    },
    Text49ba5593: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
    },
    Text5321923a: { color: theme.colors['Custom Color_2'], paddingLeft: 5 },
    Text5c26d2b1: { color: theme.colors['Custom Color_2'] },
    Text7e9f241c: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
    },
    Text876a5940: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_700Bold',
      fontSize: 30,
    },
    Textb18ab600: { color: theme.colors['Custom Color_2'], marginLeft: 5 },
    Textb711ab1b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 30,
      marginTop: 16,
    },
    Textb9c763c2: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
    },
    Touchable60b39fbb: { marginRight: 30, marginTop: 16 },
    Touchable6728d304: { marginTop: 16 },
    View02f8ec45: { marginTop: 20 },
    View0c9290ca: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View1761b477: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 20,
      height: 32,
      justifyContent: 'center',
      marginTop: 20,
      width: 124,
    },
    View1a33c04f: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View1ae309ed: { bottom: 20, position: 'absolute', right: 20 },
    View232298cf: {
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 5.5,
      height: 11,
      position: 'absolute',
      right: 9,
      top: 9,
      width: 11,
    },
    View2df72ea7: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    View37a3709d: { marginTop: 31, paddingLeft: 16, paddingRight: 16 },
    View3811faa4: { borderRadius: 15 },
    View3ce07d2b: { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
    View44c98d02: { borderRadius: 8, height: 181, width: 172 },
    View4e04950f: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 8,
      overflow: 'hidden',
    },
    View4e96e6e5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 24,
    },
    View65b7f8ad: {
      alignItems: 'center',
      height: 95,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 74,
    },
    View7bca3e44: {
      backgroundColor: theme.colors['text placeholder'],
      borderRadius: 4,
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 10,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 5,
    },
    View7ef21194: {
      alignItems: 'center',
      borderRadius: 16,
      flexDirection: 'row',
      height: 109,
      justifyContent: 'space-evenly',
      left: 0,
      marginLeft: 16,
      marginRight: 16,
      opacity: 1,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    View834cacfd: { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
    View91805b00: { marginTop: 25 },
    View97da6709: {
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 5.5,
      height: 11,
      position: 'absolute',
      right: 11,
      top: 10,
      width: 11,
    },
    Viewa21e657c: { borderRadius: 10 },
    Viewa85154f8: {
      backgroundColor: theme.colors['Custom Color_4'],
      borderRadius: 15,
      height: 130,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingLeft: 20,
      paddingTop: 20,
      width: '100%',
    },
    Viewb0ffb8f7: { borderRadius: 8, overflow: 'hidden' },
    Viewc6456ac2: {
      backgroundColor: theme.colors['Custom Color_3'],
      borderRadius: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1,
      marginTop: 25,
      paddingTop: 20,
    },
    Viewd4efb37c: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
    },
    Viewdbfc1831: {
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 16,
      height: 109,
      marginLeft: 16,
      marginRight: 16,
      opacity: 0.57,
    },
    Viewdebd3207: { flexDirection: 'row' },
    Viewf51d597e: {
      alignItems: 'center',
      borderRadius: 15,
      height: 95,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 74,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(HomeScreen);
