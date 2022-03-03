import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    backgroundColor: theme.color.background,
  },  

  pagination: {
    paddingTop: getStatusBarHeight(), 
    paddingHorizontal: 40,
    width: '100%',
    height: 104,
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
  },

  titlePagination: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title600,
    fontSize: 20,
    color: theme.color.background,
    paddingRight: 35,
  },

  ContentTitle: {
    paddingHorizontal: 40,
  },

  // logo: {
  //   width: '100%',
  //   height: 180,
  // },

  title: {
    fontFamily: theme.fonts.title600,
    fontSize: 35,
    lineHeight: 35,
    color: theme.color.highligh,
    paddingVertical: 10,
    marginTop: 50,
  },

  subtitle: {
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    color: theme.color.highligh,
    marginBottom: 20,   
  },

  form: {
    alignItems: 'center',
    justifyContent: 'center',    
    paddingHorizontal: 40,
  },


  ContainerFooter: {
    paddingHorizontal: 40,
    marginTop: 10
  },

  contentQuestion: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25
  },

  textQuestion: {
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    paddingRight: 10,
  },

  buttonLogin: {
    fontFamily: theme.fonts.title600,
    fontSize: 16,
    color: theme.color.primary
  },
})