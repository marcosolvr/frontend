import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { metrics, fonts, colors } from '../../constants/Index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
  },
  tela: {
    marginTop: Constants.statusBarHeight,
    fontSize: fonts.bigger,
  },
});

export default styles;
