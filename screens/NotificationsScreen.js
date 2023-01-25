import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [title, setTitle] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={false}
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
            <Circle size={48} bgColor={theme.colors['Custom Color_2']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Notifications'}</Text>
      </View>

      <View style={styles(theme).View3d00643b}>
        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          {/* Section header */}
          <Text style={styles(theme).Text87beb649}>{'Today'}</Text>

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
                  listKey={'TIOIXa2P'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles(theme).Viewc592ce93}>
                        <Circle
                          size={50}
                          bgColor={theme.colors['Custom Color_2']}
                        >
                          {/* Notif Icon */}
                          <Image
                            style={styles(theme).Image9e5973b7}
                            source={Images.Calendar}
                            resizeMode={'center'}
                          />
                        </Circle>

                        <View style={styles(theme).View25f480eb}>
                          {/* Title ~ */}
                          <Text
                            style={styles(theme).Textbb8a2e1a}
                            numberOfLines={2}
                          >
                            {'Edward lecky successfully completed leg training'}
                          </Text>
                          {/* Time Elapase ~ */}
                          <Text
                            style={styles(theme).Textaef94698}
                            numberOfLines={2}
                          >
                            {'2 hours Ago'}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    Image9e5973b7: { height: 24, width: 24 },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text87beb649: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 17,
      marginBottom: 20,
    },
    Textaef94698: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginLeft: 12,
      opacity: 0.5,
    },
    Textbb8a2e1a: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      lineHeight: 20,
      marginBottom: 8,
      marginLeft: 12,
    },
    View25f480eb: { flex: 1, paddingTop: 4 },
    View3d00643b: { flex: 1, marginLeft: 20, marginRight: 20, marginTop: 30 },
    View53a32d40: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 16,
      position: 'absolute',
      top: 0,
      width: 48,
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
    Viewc592ce93: { flexDirection: 'row', marginTop: 20 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(NotificationsScreen);
