import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.heading,
    height: '100%'
  },  

  pagination: {
    paddingTop: getStatusBarHeight(), 
    paddingHorizontal: 40,
    width: '100%',
    height: 55,
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
  },

  titlePagination: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title600,
    fontSize: 20,
    color: theme.color.highligh,
    paddingRight: 35,
  },

  content: {
    justifyContent: 'flex-start',    
    paddingHorizontal: 40,
  },

  logo: {
    width: '100%',
    height: 120,
  },

  title: {
    fontFamily: theme.fonts.title600,
    fontSize: 33,
    color: theme.color.highligh,
    paddingTop: 10,
  },

  subtitle: {
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    color: theme.color.highligh,
    marginBottom: 20,   
  },

  footer: {
    paddingHorizontal: 40,
    marginTop: 10
  },

  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },

  textQuestion: {
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    paddingRight: 10,
  },

  buttonLogin: {
    fontFamily: theme.fonts.title600,
    fontSize: 16,
    color: theme.color.orange
  },

  register: {
    color: theme.color.highligh,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
  },

  createAccount: {
    fontFamily: theme.fonts.title600,
    fontSize: 17,
    color: theme.color.orange,
    textAlign: 'center',
    marginBottom: 10,
  }
})