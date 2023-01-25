import React from 'react';
import Images from '../config/Images';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const PlayWorkoutPlaylistScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View328f340b}>
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
            <Circle size={50} bgColor={theme.colors['Custom Color']}>
              <Icon
                size={24}
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color_2']}
              />
            </Circle>
          </Touchable>
        </View>
      </View>

      <View style={styles(theme).View125a5eab}>
        <WebView
          style={styles(theme).WebView2954fa9c}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          cacheEnabled={true}
          source={{
            uri: 'https://www.youtube.com/embed/c8hjhRqIwHE?controls=0',
          }}
        />
      </View>
      {/* Details */}
      <View style={styles(theme).Viewc42db2f8}>
        {/* About Exercise */}
        <View>
          <Text style={styles(theme).Textfd2768d3}>{'Doing leg stretch'}</Text>

          <View style={styles(theme).View5777ad69}>
            <View style={styles(theme).View7d6a39b7}>
              <Image
                style={styles(theme).Image710c1c7d}
                resizeMode={'cover'}
                source={Images.BxStopwatch1}
              />
              <Text style={styles(theme).Text1369fdf2}>{'15  minutes'}</Text>
            </View>

            <View style={styles(theme).View2d34c3e4}>
              <Image
                style={styles(theme).Image710c1c7d}
                resizeMode={'cover'}
                source={Images.BxVideoRecording1}
              />
              <Text style={styles(theme).Text1369fdf2}>
                {'1/9 Step Videos'}
              </Text>
            </View>
          </View>
        </View>
        {/* Timer */}
        <Text style={styles(theme).Text2294a1fd}>{'20 : 00'}</Text>
        {/* Control Panel */}
        <View style={styles(theme).View8f55c608}>
          {/* Back */}
          <View style={styles(theme).View7c268408}>
            <Touchable>
              <Text style={styles(theme).Text22d9fcfa}>{'Back'}</Text>
            </Touchable>
          </View>
          {/* Play Pause */}
          <View style={styles(theme).Vieweb8a4c38}>
            {/* Tap to Pause */}
            <>
              {!isPlaying ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsPlaying(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle size={48} bgColor={theme.colors['Custom Color_5']}>
                    <Icon
                      style={styles(theme).Iconf699feb3}
                      size={24}
                      name={'Ionicons/ios-pause'}
                      color={theme.colors['Custom #ffffff']}
                    />
                  </Circle>
                </Touchable>
              )}
            </>
            {/* Tap to Play */}
            <>
              {isPlaying ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsPlaying(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle size={48} bgColor={theme.colors['Custom Color_5']}>
                    <Icon
                      style={styles(theme).Iconf699feb3}
                      size={24}
                      color={theme.colors['Custom #ffffff']}
                      name={'Ionicons/ios-play'}
                    />
                  </Circle>
                </Touchable>
              )}
            </>
          </View>
          {/* Next */}
          <View style={styles(theme).View7c268408}>
            <Touchable>
              <Text style={styles(theme).Text22d9fcfa}>{'Next'}</Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Iconf699feb3: { marginLeft: 2 },
    Image710c1c7d: { height: 24, opacity: 0.65, width: 24 },
    Text1369fdf2: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginLeft: 10,
    },
    Text2294a1fd: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 40,
      marginTop: 40,
      textAlign: 'center',
    },
    Text22d9fcfa: {
      color: theme.colors['Custom #ffffff'],
      fontSize: 21,
      opacity: 0.65,
    },
    Textfd2768d3: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_500Medium',
      fontSize: 28,
    },
    View125a5eab: { height: '50%', top: 0, width: '100%' },
    View2d34c3e4: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 25,
    },
    View328f340b: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
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
    View5777ad69: { flexDirection: 'row', marginTop: 16 },
    View7c268408: {
      height: 48,
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
    },
    View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
    View8f55c608: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 40,
    },
    Viewc42db2f8: {
      backgroundColor: theme.colors['Custom Color'],
      bottom: 0,
      flex: 1,
      left: 0,
      paddingBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      position: 'absolute',
      right: 0,
    },
    Vieweb8a4c38: { alignItems: 'center', justifyContent: 'center' },
    WebView2954fa9c: { flex: 1, height: '100%', width: '100%' },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(PlayWorkoutPlaylistScreen);
