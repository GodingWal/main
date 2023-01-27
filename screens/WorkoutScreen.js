import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
  Circle,
  Icon,
  Link,
  ScreenContainer,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const WorkoutScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [FilterModal, setFilterModal] = React.useState(false);
  const [SelectedCategory, setSelectedCategory] = React.useState('Foot');
  const [SelectedDate, setSelectedDate] = React.useState('1 Day ago');
  const [sliderValue, setSliderValue] = React.useState(50);
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
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Workout'}</Text>
      </View>

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollViewd62adfa2Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Search */}
        <View style={styles(theme).Viewdcd713fa}>
          <Icon
            size={24}
            name={'Feather/search'}
            color={theme.colors['Custom Color_4']}
          />
          <View style={styles(theme).Viewc992f941}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput190cec5c}
              value={textInputValue}
              placeholder={'Search...'}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_4']}
            />
          </View>
          {/* Filters */}
          <Touchable
            onPress={() => {
              try {
                setFilterModal(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).Vieweb8a4c38}>
              <Image
                style={styles(theme).Imagee7db13b0}
                resizeMode={'cover'}
                source={Images.Filter}
              />
            </View>
          </Touchable>
        </View>
        {/* Category */}
        <View style={styles(theme).View834cacfd}>
          <Text style={styles(theme).Text23beeba4}>{'Category'}</Text>

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
                <Text style={styles(theme).Text156ddc8e}>{'Hand'}</Text>
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

              <View style={styles(theme).View606a579b}>
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
        {/* Workout List */}
        <View style={styles(theme).Viewd11808c7}>
          <View style={styles(theme).View4e96e6e5}>
            <Text style={styles(theme).Text23beeba4}>{'Workout List'}</Text>
            {/* See all */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('WorkoutListAllScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Linka8d7e93d}
              title={'See all'}
            />
          </View>

          <View style={styles(theme).View4e04950f}>
            <ScrollView
              style={styles(theme).ScrollView989db244}
              contentContainerStyle={styles(theme).ScrollView9fa86917Content}
              bounces={true}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            >
              <DraftbitExampleDataApi.FetchUsersGET limit={5}>
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
                      listKey={'yim2EeOG'}
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
                                  style={styles(theme).ImageBackground0a984f33}
                                  resizeMode={'cover'}
                                  source={Images.CategoryHand}
                                >
                                  <FlatList
                                    data={Constants['Tags']}
                                    listKey={'LRohob2G'}
                                    keyExtractor={listData =>
                                      listData?.id ||
                                      listData?.uuid ||
                                      JSON.stringify(listData)
                                    }
                                    renderItem={({ item }) => {
                                      const listData = item;
                                      return (
                                        <View
                                          style={styles(theme).View3efc27bf}
                                        >
                                          <Text
                                            style={styles(theme).Text7e9f241c}
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
                                    horizontal={true}
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
                    />
                  );
                }}
              </DraftbitExampleDataApi.FetchUsersGET>
            </ScrollView>
          </View>
        </View>
        {/* Build Leg Muscles */}
        <View style={styles(theme).Viewd11808c7}>
          <View style={styles(theme).View4e96e6e5}>
            <Text style={styles(theme).Text23beeba4}>
              {'Build Leg Muscles'}
            </Text>
            {/* See all */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('TodaysPlaneAllScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Linka8d7e93d}
              title={'See all'}
            />
          </View>

          <View style={styles(theme).View7dea9e07}>
            <DraftbitExampleDataApi.FetchUsersGET limit={3}>
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
                    listKey={'XbtxQJdU'}
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

      <Modal visible={FilterModal} animationType={'none'} transparent={true}>
        <View style={styles(theme).View1d7a6c6b}>
          <BlurView
            style={styles(theme).BlurView261a8002}
            tint={'default'}
            intensity={50}
          />
          {/* Filters View */}
          <View style={styles(theme).View7fe86bf1}>
            {/* header */}
            <View style={styles(theme).View3589b9a5}>
              <View style={styles(theme).Viewbc177ead}>
                <Touchable
                  onPress={() => {
                    try {
                      setFilterModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={theme.colors.light} size={48}>
                    <Icon
                      size={24}
                      name={'Entypo/cross'}
                      color={theme.colors['Custom Color_2']}
                    />
                  </Circle>
                </Touchable>
              </View>

              <Text style={styles(theme).Text44d5a5d9}>{'Filter'}</Text>
              <View style={styles(theme).Viewbc177ead} />
            </View>
            {/* People Join */}
            <View style={styles(theme).Viewa6a8ed74}>
              <Text style={styles(theme).Text756ea7bf}>
                {'Many People Join'}
              </Text>
              <Slider
                onValueChange={newSliderValue => {
                  try {
                    setSliderValue(newSliderValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Slider2362b272}
                value={sliderValue}
                thumbTintColor={theme.colors['GetFit Orange']}
                minimumTrackTintColor={theme.colors['GetFit Orange']}
                minimumValue={1}
                maximumValue={100}
              />
              <View style={styles(theme).Viewc65acab6}>
                <View style={styles(theme).View678f1763}>
                  <Text style={styles(theme).Text968a4b8f}>{sliderValue}</Text>
                </View>
              </View>
            </View>
            {/* Popular Categories */}
            <View style={styles(theme).Viewa8d0842a}>
              <Text style={styles(theme).Text756ea7bf}>
                {'Popular Category'}
              </Text>
              <FlashList
                data={Constants['PopularCategories']}
                listKey={'jrhfdE1u'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <>
                      <>
                        {SelectedCategory === flashListData ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedCategory(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View style={styles(theme).Viewca17c80b}>
                              <Text style={styles(theme).Text71494a55}>
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                      <>
                        {!(SelectedCategory === flashListData) ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedCategory(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View style={styles(theme).View424672bc}>
                              <Text style={styles(theme).Text7450cd73}>
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                    </>
                  );
                }}
                style={styles(theme).FlashList989db244}
                contentContainerStyle={styles(theme).FlashListeb5bfc7dContent}
                estimatedItemSize={50}
                numColumns={1}
                horizontal={true}
              />
            </View>
            {/* Date Upload */}
            <View style={styles(theme).View4c0fb660}>
              <Text style={styles(theme).Text756ea7bf}>{'Date Upload'}</Text>
              <FlashList
                data={Constants['DateUploadedArray']}
                listKey={'5A8nP5fn'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <>
                      <>
                        {SelectedDate === flashListData ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedDate(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View style={styles(theme).Viewca17c80b}>
                              <Text style={styles(theme).Text71494a55}>
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                      <>
                        {!(SelectedDate === flashListData) ? null : (
                          <Touchable>
                            <View style={styles(theme).View424672bc}>
                              <Text style={styles(theme).Text7450cd73}>
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                    </>
                  );
                }}
                style={styles(theme).FlashList989db244}
                contentContainerStyle={styles(theme).FlashListeb5bfc7dContent}
                estimatedItemSize={50}
                numColumns={1}
                horizontal={true}
              />
            </View>
            {/* Apply Filter */}
            <Button
              onPress={() => {
                try {
                  setFilterModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttond0dc7006}
              title={'Apply Filter'}
            />
            {/* Clear All */}
            <View style={styles(theme).View8366f95b}>
              <Touchable
                onPress={() => {
                  try {
                    setFilterModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text style={styles(theme).Text6a2175af}>{'Clear All'}</Text>
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
    BlurView261a8002: { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
    Buttond0dc7006: {
      backgroundColor: theme.colors['GetFit Orange'],
      borderRadius: 24,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 32,
      textAlign: 'center',
    },
    Fetch431eb058: { minHeight: 40 },
    FlashListeb5bfc7dContent: { flex: 1, flexWrap: 'wrap', marginTop: 16 },
    FlatList94bdd9d3Content: { flex: 1, flexDirection: 'row' },
    FlatListc992f941Content: { flex: 1 },
    FlatListdebd3207Content: { flexDirection: 'row' },
    Image0d05d5fd: { height: 128, width: 172 },
    Image89fafeca: { height: 36, width: 36 },
    ImageBackground0a984f33: { height: 128, width: 172 },
    Imaged8c70a6d: { height: 80, width: 70 },
    Imagee7db13b0: { height: 18, width: 26 },
    Imagefb2b3c11: { height: 100, width: 74 },
    Linka8d7e93d: { color: theme.colors['GetFit Orange'] },
    ScrollView9fa86917Content: { paddingLeft: 16, paddingRight: 16 },
    ScrollViewd62adfa2Content: { paddingBottom: 20 },
    Slider2362b272: { marginTop: 10 },
    Text07f68878: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
      marginTop: 10,
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
    Text44d5a5d9: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textAlign: 'center',
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text6a2175af: {
      color: theme.colors['Custom Color_8'],
      fontFamily: 'Inter_500Medium',
      textAlign: 'center',
    },
    Text71494a55: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
    },
    Text7450cd73: {
      color: theme.colors['GetFit Orange'],
      fontFamily: 'Inter_400Regular',
    },
    Text756ea7bf: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textAlign: 'left',
    },
    Text7e9f241c: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
    },
    Text968a4b8f: {
      color: theme.colors['Custom Color_13'],
      fontFamily: 'Inter_500Medium',
      fontSize: 17,
      textAlign: 'center',
    },
    TextInput190cec5c: {
      borderRadius: 8,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textda5c1871: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 17,
      marginTop: 8,
      opacity: 0.5,
    },
    Touchable60b39fbb: { marginRight: 30, marginTop: 16 },
    Touchable6728d304: { marginTop: 16 },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View1ae309ed: { bottom: 20, position: 'absolute', right: 20 },
    View1d7a6c6b: { flex: 1, justifyContent: 'flex-end' },
    View2d92a5f5: { borderRadius: 10, overflow: 'hidden' },
    View3126297f: { flex: 1, marginLeft: 16, marginRight: 16 },
    View3589b9a5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    View3811faa4: { borderRadius: 15 },
    View3efc27bf: {
      backgroundColor: theme.colors['text placeholder'],
      borderRadius: 4,
      height: 25,
      justifyContent: 'center',
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 10,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 5,
    },
    View424672bc: {
      borderBottomWidth: 1,
      borderColor: theme.colors['GetFit Orange'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 36,
      justifyContent: 'center',
      marginRight: 16,
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View44c98d02: { borderRadius: 8, height: 181, width: 172 },
    View4c0fb660: { marginTop: 22, paddingLeft: 16, paddingRight: 16 },
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
    View59437878: { alignItems: 'flex-start', flex: 1, flexDirection: 'row' },
    View606a579b: {
      alignItems: 'center',
      height: 95,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 74,
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
    View678f1763: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 40,
      justifyContent: 'center',
      width: 100,
    },
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
    View7fe86bf1: {
      backgroundColor: theme.colors['Custom Color'],
      paddingBottom: 20,
    },
    View834cacfd: { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
    View8366f95b: {
      height: 48,
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    Viewa21e657c: { borderRadius: 10 },
    Viewa6a8ed74: {
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewa8d0842a: { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewb0ffb8f7: { borderRadius: 8, overflow: 'hidden' },
    Viewbc177ead: { height: 48, justifyContent: 'center', width: 48 },
    Viewc65acab6: { alignItems: 'flex-end' },
    Viewc992f941: { flex: 1 },
    Viewca17c80b: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 36,
      justifyContent: 'center',
      marginRight: 16,
      marginTop: 16,
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
    Viewd11808c7: { marginTop: 30 },
    Viewdcd713fa: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 52,
      justifyContent: 'space-between',
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Vieweb8a4c38: { alignItems: 'center', justifyContent: 'center' },
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
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(WorkoutScreen);
