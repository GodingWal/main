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
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const MessageDetailsScreen = props => {
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
      hasBottomSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View22a6ee33}>
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
        <Text style={styles(theme).Text47c9b89f}>
          {props.route?.params?.otherUser ?? 'Arvind Limba'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollView2a980596Content
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data;
            if (!chatsData || loading) {
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
                data={chatsData}
                listKey={'iuEbs7Lr'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View style={styles(theme).View5e78c0e9}>
                            <View>
                              <CircleImage
                                source={{ uri: `${listData?.avatar}` }}
                                size={32}
                              />
                            </View>

                            <View style={styles(theme).Viewc992f941}>
                              <View style={styles(theme).View7f4533cc}>
                                {/* Message ~ */}
                                <Text style={styles(theme).Text027892e2}>
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text style={styles(theme).Textfe25e11c}>
                                {'9:41 AM'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View style={styles(theme).View5e78c0e9}>
                            <View style={styles(theme).Viewc992f941}>
                              <View style={styles(theme).View0e8c8dc3}>
                                {/* Message ~ */}
                                <Text style={styles(theme).Text61802fac}>
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text style={styles(theme).Text0d9b0eef}>
                                {'9:41 AM'}
                              </Text>
                            </View>

                            <View>
                              <CircleImage
                                source={{ uri: `${listData?.avatar}` }}
                                size={32}
                              />
                            </View>
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Message Tray */}
        <View style={styles(theme).Viewe4fe9b64}>
          <View style={styles(theme).View5cf968ba}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8cbd5376}
              value={textInputValue}
              placeholder={'Type your message...'}
              placeholderTextColor={theme.colors['Custom Color_4']}
              editable={true}
            />
          </View>

          <View style={styles(theme).View8af7f235}>
            <Touchable>
              <Image
                style={styles(theme).Image84575dc9}
                resizeMode={'cover'}
                source={Images.Group162742}
              />
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    Image84575dc9: { height: 32, width: 32 },
    KeyboardAwareScrollView2a980596Content: {
      flex: 1,
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    Text027892e2: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 20,
      opacity: 0.7,
    },
    Text0d9b0eef: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 11,
      lineHeight: 20,
      marginBottom: 6,
      marginRight: 10,
      marginTop: 4,
      opacity: 0.5,
      textAlign: 'right',
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text61802fac: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 20,
      opacity: 0.7,
    },
    TextInput8cbd5376: {
      borderRadius: 8,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginLeft: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textfe25e11c: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 11,
      lineHeight: 20,
      marginBottom: 6,
      marginLeft: 10,
      marginTop: 4,
      opacity: 0.5,
    },
    View0e8c8dc3: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderBottomLeftRadius: 24,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
    },
    View22a6ee33: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
      marginBottom: 12,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
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
    View5cf968ba: { flex: 1, justifyContent: 'center' },
    View5e78c0e9: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
      paddingBottom: 12,
    },
    View7f4533cc: {
      backgroundColor: theme.colors['Custom Color_2'],
      borderBottomRightRadius: 24,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      flex: 1,
      marginLeft: 10,
      marginRight: 20,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
    },
    View8af7f235: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewc992f941: { flex: 1 },
    Viewe4fe9b64: {
      alignItems: 'center',
      backgroundColor: theme.colors['Background'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      bottom: 0,
      flexDirection: 'row',
      height: 52,
      justifyContent: 'space-between',
      left: 0,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      paddingLeft: 8,
      paddingRight: 8,
      position: 'absolute',
      right: 0,
    },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(MessageDetailsScreen);
