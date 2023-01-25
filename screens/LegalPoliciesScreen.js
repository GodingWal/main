import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const LegalPoliciesScreen = props => {
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
      hasBottomSafeArea={false}
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
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text47c9b89f}>{'Legal and Policies'}</Text>
      </View>

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView056e9605Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Terms */}
        <Text style={styles(theme).Textf233e8f9}>
          {'Terms\n\n'}
          {/* Details */}
          <Text style={styles(theme).Textbf4d7a26}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.'
            }
          </Text>
        </Text>
        {/* Terms */}
        <Text style={styles(theme).Textac3c6a0e}>
          {'Changes to the Service and/or Terms:\n\n'}
          {/* Details */}
          <Text style={styles(theme).Text979b567f}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.'
            }
          </Text>
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    ScrollView056e9605Content: {
      flex: 1,
      marginTop: 10,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Text47c9b89f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text979b567f: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      lineHeight: 18,
      opacity: 0.4,
    },
    Textac3c6a0e: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      lineHeight: 20,
      marginTop: 25,
    },
    Textbf4d7a26: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      lineHeight: 18,
      opacity: 0.4,
      textAlign: 'left',
    },
    Textf233e8f9: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'left',
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
    screen: { backgroundColor: theme.colors['Custom Color'], height: '100%' },
  });

export default withTheme(LegalPoliciesScreen);
