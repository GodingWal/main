import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
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

const MessageScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewaa923d11}>
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
            <Circle size={50} bgColor={theme.colors['Custom Color_2']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Message'}</Text>
      </View>
      {/* Search Bar */}
      <View style={styles(theme).View356eabc8}>
        <Icon
          size={24}
          name={'AntDesign/search1'}
          color={theme.colors['Custom Color_4']}
        />
        <View style={styles(theme).View5cf968ba}>
          <TextInput
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).TextInput2e6d9c82}
            placeholder={'Search...'}
            value={textInputValue}
            placeholderTextColor={theme.colors['Custom Color_4']}
            editable={true}
          />
        </View>

        <View style={styles(theme).View8af7f235}>
          <Touchable>
            <Image
              style={styles(theme).Imagee7db13b0}
              resizeMode={'cover'}
              source={Images.Filter}
            />
          </Touchable>
        </View>
      </View>

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollViewb8a648aeContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Chats */}
        <View style={styles(theme).Viewa98ac21e}>
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
                  listKey={'7AVT1zMb'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('MessageDetailsScreen', {
                              otherUser: listData?.firstName,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles(theme).View1dfde758}>
                          <View>
                            <CircleImage
                              size={56}
                              source={{ uri: `${listData?.avatar}` }}
                            />
                          </View>

                          <View style={styles(theme).View381296f4}>
                            {/* Name ~ */}
                            <Text style={styles(theme).Text29027b05}>
                              {listData?.fullName}
                            </Text>
                            {/* Message ~ */}
                            <Text
                              style={styles(theme).Textdd34600e}
                              numberOfLines={1}
                            >
                              {listData?.bio}
                            </Text>
                          </View>

                          <View style={styles(theme).Viewc65acab6}>
                            {/* time ~! */}
                            <Text style={styles(theme).Textfba51f57}>
                              {'10:20'}
                            </Text>
                            <>
                              {!(listData?.id < 3) ? null : (
                                <Circle
                                  size={24}
                                  bgColor={theme.colors['GetFit Orange']}
                                >
                                  {/* Unread count ~ */}
                                  <Text style={styles(theme).Texta584dc5d}>
                                    {listData?.id}
                                  </Text>
                                </Circle>
                              )}
                            </>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  style={styles(theme).FlatList989db244}
                  contentContainerStyle={styles(theme).FlatListc992f941Content}
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>

      <View style={styles(theme).View653e0f9e}>
        <Touchable>
          <Circle size={50} bgColor={theme.colors['Custom Color_2']}>
            <Icon
              size={24}
              name={'Feather/plus'}
              color={theme.colors['Studily_Dark_UI']}
            />
          </Circle>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Imagee7db13b0: { height: 18, width: 26 },
    ScrollViewb8a648aeContent: { paddingBottom: 25 },
    Text29027b05: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 17,
      lineHeight: 20,
      marginTop: 4,
      opacity: 1,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    TextInput2e6d9c82: {
      borderRadius: 8,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      marginLeft: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Texta584dc5d: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      lineHeight: 20,
      opacity: 1,
    },
    Textdd34600e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      lineHeight: 20,
      marginTop: 8,
      opacity: 0.5,
    },
    Textfba51f57: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 13,
      lineHeight: 20,
      marginBottom: 6,
      marginTop: 4,
      opacity: 0.5,
    },
    View1dfde758: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 18,
      paddingTop: 18,
    },
    View356eabc8: {
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
      marginBottom: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingLeft: 12,
      paddingRight: 12,
    },
    View381296f4: { flex: 1, marginLeft: 10, marginRight: 20 },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
    },
    View5cf968ba: { flex: 1, justifyContent: 'center' },
    View653e0f9e: { bottom: 35, position: 'absolute', right: 20 },
    View8af7f235: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewa98ac21e: { borderRadius: 12, marginLeft: 20, marginRight: 20 },
    Viewaa923d11: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewc65acab6: { alignItems: 'flex-end' },
    screen: { backgroundColor: theme.colors['Custom Color'], height: '100%' },
  });

export default withTheme(MessageScreen);
