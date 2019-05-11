import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../constants/Index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
    marginTop: metrics.statusBarMargin,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 70,
  },
  input: {
    height: metrics.inputHeight,
    backgroundColor: colors.gray,
    borderRadius: metrics.defaultBorderRadius,
    paddingHorizontal: metrics.inputPaddingHorizontal,
    marginBottom: 20,
    fontSize: fonts.regular,
  },
  button: {
    height: metrics.inputHeight,
    backgroundColor: colors.primary,
    borderRadius: metrics.defaultBorderRadius,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.light,
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
  errorMessage: {
    fontSize: fonts.regular,
    color: colors.errorText,
    textAlign: 'center',
  },
  alternativasTitle: {
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: colors.dark,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  criarContaText: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'center',
    fontSize: fonts.regular,
  },
  criarContaButton: {
    color: colors.secondary,
    marginLeft: 5,
    fontSize: fonts.regular,
  },
});

export default styles;