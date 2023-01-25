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
import { FlatList, StyleSheet, Text, View } from 'react-native';

const LanguagesScreen = props => {
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

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View776f12e9}>
        <View style={styles(theme).Viewba32575a}>
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
              name={'Ionicons/md-close-outline'}
              color={theme.colors['Custom Color_2']}
              size={30}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Textc93d683d}>{'Select a Language'}</Text>
      </View>
      <FlatList
        data={Constants['LanguageArray']}
        listKey={'n1IKU1s8'}
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
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles(theme).Viewb0f40ead}>
                <Icon
                  size={24}
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                />
                {/* Language ~ */}
                <Text style={styles(theme).Textbd5b679e}>{listData}</Text>
                <>
                  {!(Constants['Language'] === listData) ? null : (
                    <CircleImage
                      style={styles(theme).CircleImageaa69c57f}
                      source={Images.Check}
                      size={24}
                    />
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
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImageaa69c57f: { left: 14, position: 'absolute' },
    FlatListc992f941Content: { flex: 1 },
    Textbd5b679e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      marginLeft: 20,
    },
    Textc93d683d: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Archivo_600SemiBold',
      fontSize: 18,
    },
    View776f12e9: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'center',
      marginLeft: 8,
      marginTop: 16,
    },
    Viewb0f40ead: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
      borderLeftWidth: 1,
      borderRadius: 5,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 48,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingLeft: 15,
    },
    Viewba32575a: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      width: 48,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(LanguagesScreen);
