import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  Button,
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
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MakeTodaysPlaneScreen = props => {
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
      <View style={styles(theme).Viewaa923d11}>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Today’s Plane'}</Text>
      </View>

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollViewe75898bbContent}
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
          <Touchable>
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
          </View>

          <View style={styles(theme).View7dea9e07}>
            <DraftbitExampleDataApi.FetchUsersGET limit={8}>
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
                    listKey={'kcayqzXO'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable style={styles(theme).Touchable6728d304}>
                          <View style={styles(theme).Viewccae4e5d}>
                            <View style={styles(theme).Viewfe3a5f26}>
                              <View style={styles(theme).View2d92a5f5}>
                                <Image
                                  style={styles(theme).Imaged8c70a6d}
                                  resizeMode={'cover'}
                                  source={Images.CategoryHand}
                                />
                              </View>

                              <View style={styles(theme).View01f79a2d}>
                                <Text style={styles(theme).Text07f68878}>
                                  {'Doing leg stretch'}
                                </Text>

                                <Text style={styles(theme).Textda5c1871}>
                                  {'Finish this exercise in 15 minutes'}
                                </Text>
                              </View>
                            </View>

                            <View>
                              <Touchable>
                                <Icon
                                  size={24}
                                  color={theme.colors['Custom Color_2']}
                                  name={'FontAwesome/circle-thin'}
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
      {/* Next Step */}
      <View style={styles(theme).View94a0454b}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PlaneDetailsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Next Step */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('PlaneDetailsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button4430014d}
            title={'Next Step'}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button4430014d: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      fontFamily: 'System',
      fontWeight: '700',
      height: 56,
      textAlign: 'center',
    },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Image89fafeca: { height: 36, width: 36 },
    Imaged8c70a6d: { height: 80, width: 70 },
    Imagee7db13b0: { height: 18, width: 26 },
    Imagefb2b3c11: { height: 100, width: 74 },
    ScrollViewe75898bbContent: { paddingBottom: 85 },
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
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
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
    Touchable6728d304: { marginTop: 16 },
    View01f79a2d: { marginLeft: 16, width: '65%' },
    View1324b9e2: { flexDirection: 'row', justifyContent: 'space-evenly' },
    View2d92a5f5: { borderRadius: 10, overflow: 'hidden' },
    View3811faa4: { borderRadius: 15 },
    View4e96e6e5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 24,
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
    View7dea9e07: {
      justifyContent: 'space-evenly',
      marginTop: 8,
      overflow: 'hidden',
      paddingLeft: 20,
      paddingRight: 20,
    },
    View834cacfd: { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
    View94a0454b: {
      bottom: 40,
      left: 0,
      paddingLeft: 20,
      paddingRight: 20,
      position: 'absolute',
      right: 0,
      width: '100%',
      zIndex: 21,
    },
    Viewa21e657c: { borderRadius: 10 },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewc992f941: { flex: 1 },
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
    Viewfe3a5f26: { alignItems: 'flex-start', flexDirection: 'row' },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(MakeTodaysPlaneScreen);
