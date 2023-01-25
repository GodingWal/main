import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const LanguageSettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
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
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Language'}</Text>
      </View>
      {/* Languages Container */}
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Suggested Languages */}
        <View style={styles(theme).View03adb947}>
          {/* Section Heading */}
          <Text style={styles(theme).Textda9e7f9a}>
            {'Suggested Languages'}
          </Text>
          <FlatList
            data={SuggestedLanguagesArr}
            listKey={'Bh4bJn4C'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).View858d5c77}>
                    {/* Language ~ */}
                    <Text style={styles(theme).Text0a326166}>{listData}</Text>
                    {/* Selected Icon */}
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <CircleImage source={Images.Check} size={24} />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            style={styles(theme).FlatList989db244}
            contentContainerStyle={styles(theme).FlatListc992f941Content}
            numColumns={1}
          />
        </View>
        {/* Other Languages */}
        <View style={styles(theme).View03adb947}>
          {/* Section Heading */}
          <Text style={styles(theme).Textda9e7f9a}>{'Other Languages'}</Text>
          <FlatList
            data={OtherLanguagesArr}
            listKey={'c2DgujUR'}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).View858d5c77}>
                    {/* Language ~ */}
                    <Text style={styles(theme).Text0a326166}>{listData}</Text>
                    {/* Selected Icon */}
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <CircleImage source={Images.Check} size={24} />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
            style={styles(theme).FlatList989db244}
            contentContainerStyle={styles(theme).FlatListc992f941Content}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    FlatListc992f941Content: { flex: 1 },
    Text0a326166: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Textda9e7f9a: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      marginBottom: 8,
      marginTop: 5,
      opacity: 0.6,
    },
    View03adb947: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
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
    View858d5c77: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      flexDirection: 'row',
      height: 55,
      justifyContent: 'space-between',
      marginLeft: 8,
      marginRight: 8,
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
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(LanguageSettingsScreen);
