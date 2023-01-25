import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';

const FiltersScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;

  const [sliderValue, setSliderValue] = React.useState(50);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Modal animationType={'none'} transparent={true}>
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
                <Touchable>
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
              <FlatList
                data={Constants['PopularCategories']}
                listKey={'eaYaNoV9'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles(theme).View1365493b}>
                      <Button
                        style={styles(theme).Buttonf5bf8d56}
                        title={`${listData}`}
                      />
                    </View>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatList420ca5e9Content}
                numColumns={1}
              />
            </View>
            {/* Date Upload */}
            <View style={styles(theme).View4c0fb660}>
              <Text style={styles(theme).Text756ea7bf}>{'Date Upload'}</Text>
              <FlashList
                data={Constants['DateUploadedArray']}
                listKey={'hhAR4e1p'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <>
                      <Touchable
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'SelectedDate',
                              value: flashListData,
                            });
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

                      <Touchable>
                        <View style={styles(theme).View424672bc}>
                          <Text style={styles(theme).Text7450cd73}>
                            {flashListData}
                          </Text>
                        </View>
                      </Touchable>
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
              style={styles(theme).Buttond0dc7006}
              title={'Apply Filter'}
            />
            {/* Clear All */}
            <View style={styles(theme).View8366f95b}>
              <Touchable>
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
    Buttonf5bf8d56: {
      backgroundColor: theme.colors['Background'],
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    FlashListcdc2a5a7Content: { flexDirection: 'row', marginTop: 16 },
    FlashListeb5bfc7dContent: { flex: 1, flexWrap: 'wrap', marginTop: 16 },
    FlatList420ca5e9Content: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    Slider2362b272: { marginTop: 10 },
    Text44d5a5d9: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      textAlign: 'center',
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
    Text968a4b8f: {
      color: theme.colors['Custom Color_13'],
      fontFamily: 'Inter_500Medium',
      fontSize: 17,
      textAlign: 'center',
    },
    View1365493b: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flex: 1,
      flexDirection: 'row',
      height: 36,
      marginRight: 12,
      marginTop: 16,
      paddingLeft: 12,
      paddingRight: 12,
    },
    View13f68808: {
      borderBottomWidth: 1,
      borderColor: theme.colors['GetFit Orange'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginRight: 16,
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View1d7a6c6b: { flex: 1, justifyContent: 'flex-end' },
    View302cc49a: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_4'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginRight: 16,
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View3589b9a5: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
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
    View4c0fb660: { marginTop: 22, paddingLeft: 16, paddingRight: 16 },
    View557e67a1: { alignSelf: 'flex-start' },
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
    View7fe86bf1: {
      backgroundColor: theme.colors['Custom Color'],
      paddingBottom: 20,
    },
    View8366f95b: {
      height: 48,
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    Viewa6a8ed74: {
      marginTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewa8d0842a: { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
    Viewbc177ead: { height: 48, justifyContent: 'center', width: 48 },
    Viewc65acab6: { alignItems: 'flex-end' },
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
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      justifyContent: 'space-between',
    },
  });

export default withTheme(FiltersScreen);
