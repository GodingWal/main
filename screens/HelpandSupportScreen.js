import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import {
  AccordionGroup,
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
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HelpandSupportScreen = props => {
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
        <Text style={styles(theme).Text47c9b89f}>{'Help and Support'}</Text>
      </View>
      {/* Search Bar */}
      <View style={styles(theme).Viewf4824b4a}>
        <Icon
          size={24}
          name={'AntDesign/search1'}
          color={theme.colors['Custom Color_4']}
        />
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

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollViewb8a648aeContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* FAQs */}
        <View style={styles(theme).Viewbfffe3d9}>
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
                  listKey={'d5qdJ5cr'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles(theme).View99af70f5}>
                        <AccordionGroup
                          style={styles(theme).AccordionGroup5abbb772}
                          label={'Beautiful West Coast Villa'}
                          caretSize={24}
                          iconSize={24}
                          caretColor={theme.colors['Custom Color_2']}
                          openColor={theme.colors['Custom Color_2']}
                          closedColor={theme.colors['Custom Color_2']}
                          expanded={false}
                        >
                          {/* Details */}
                          <Text style={styles(theme).Textf5ccf52b}>
                            {listData?.bio}
                          </Text>
                        </AccordionGroup>
                      </View>
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
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    AccordionGroup5abbb772: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      paddingBottom: 8,
      paddingTop: 8,
    },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    ScrollViewb8a648aeContent: { paddingBottom: 25 },
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
    Textf5ccf52b: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      lineHeight: 20,
      marginTop: 4,
      opacity: 0.5,
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
    View99af70f5: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      paddingBottom: 18,
      paddingTop: 18,
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
    Viewbfffe3d9: {
      borderRadius: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 8,
    },
    Viewf4824b4a: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 52,
      marginBottom: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
      paddingLeft: 12,
      paddingRight: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'], height: '100%' },
  });

export default withTheme(HelpandSupportScreen);
