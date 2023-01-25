import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
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
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const WorkoutListAllScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      {/* Header */}
      <View style={styles(theme).View7f6e18e1}>
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
            <Circle bgColor={theme.colors['Custom Color_2']} size={48}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'All Workout'}</Text>
      </View>

      <ScrollView
        style={styles(theme).ScrollViewdf29e2e2}
        contentContainerStyle={styles(theme).ScrollViewfad38933Content}
        showsVerticalScrollIndicator={true}
        bounces={false}
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
              placeholder={'Search...'}
              value={textInputValue}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_4']}
            />
          </View>
          {/* Filters */}
          <Touchable>
            <View style={styles(theme).View3429b87c}>
              <Image
                style={styles(theme).Imagee7db13b0}
                resizeMode={'cover'}
                source={Images.Filter}
              />
            </View>
          </Touchable>
        </View>
        {/* Category */}
        <View style={styles(theme).View812b8e72}>
          <Text style={styles(theme).Text863faf1f}>{'Category'}</Text>

          <View style={styles(theme).View6973eff6}>
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
        {/* Popular Workout */}
        <View style={styles(theme).Viewaaa0b124}>
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
                  listKey={'1gnoqRPJ'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
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
                        style={styles(theme).Touchable707ff3e8}
                      >
                        <View style={styles(theme).View2d7b4cb6}>
                          {/* Image */}
                          <View style={styles(theme).Viewb0ffb8f7}>
                            <ImageBackground
                              style={styles(theme).ImageBackgroundfbf63378}
                              resizeMode={'cover'}
                              source={Images.CategoryHand}
                            >
                              <FlatList
                                data={Constants['Tags']}
                                listKey={'UCZ8oely'}
                                keyExtractor={listData =>
                                  listData?.id ||
                                  listData?.uuid ||
                                  JSON.stringify(listData)
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <View style={styles(theme).Viewf98b4218}>
                                      <Text style={styles(theme).Text7e9f241c}>
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
                          {/* Title */}
                          <Text
                            style={styles(theme).Text07f68878}
                            numberOfLines={1}
                          >
                            {'Up and Down Stairs'}
                          </Text>
                          {/* Description */}
                          <Text
                            style={styles(theme).Text2aa54dc5}
                            numberOfLines={1}
                          >
                            {'Train your thighs and legs'}
                          </Text>
                        </View>
                      </Touchable>
                    );
                  }}
                  style={styles(theme).FlatListdf29e2e2}
                  contentContainerStyle={styles(theme).FlatList989db244Content}
                  numColumns={2}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListdebd3207Content: { flexDirection: 'row' },
    FlatListdf29e2e2: { width: '100%' },
    ImageBackgroundfbf63378: { height: 110, width: '100%' },
    Imagee7db13b0: { height: 18, width: 26 },
    Imagefb2b3c11: { height: 100, width: 74 },
    ScrollViewdf29e2e2: { width: '100%' },
    ScrollViewfad38933Content: { marginTop: 20, paddingBottom: 40 },
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
    Text2aa54dc5: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginTop: 8,
      opacity: 0.5,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text7e9f241c: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
    },
    Text863faf1f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginLeft: 16,
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
    Touchable6728d304: { marginTop: 16 },
    Touchable707ff3e8: {
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: 16,
      width: '46%',
    },
    View2d7b4cb6: { borderRadius: 8, height: 181, width: '100%' },
    View3429b87c: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View3811faa4: { borderRadius: 15 },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
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
    View6973eff6: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View7f6e18e1: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View812b8e72: { marginLeft: '2%', marginRight: '2%', marginTop: 20 },
    Viewa21e657c: { borderRadius: 10 },
    Viewaaa0b124: {
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Viewb0ffb8f7: { borderRadius: 8, overflow: 'hidden' },
    Viewc992f941: { flex: 1 },
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
    Viewf98b4218: {
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
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(WorkoutListAllScreen);
