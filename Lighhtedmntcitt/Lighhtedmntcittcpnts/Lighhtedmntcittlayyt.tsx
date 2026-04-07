import type {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Lighhtedmntcittlayyt = ({children}: {children: ReactNode}) => {
  return (
    <LinearGradient
      colors={['rgb(206, 31, 69)', 'rgb(92, 8, 15)']}
      style={styles.lighhtedmntcittBackground}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.lighhtedmntcittContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittBackground: {
    flex: 1,
  },
  lighhtedmntcittContent: {
    flexGrow: 1,
  },
});

export default Lighhtedmntcittlayyt;
