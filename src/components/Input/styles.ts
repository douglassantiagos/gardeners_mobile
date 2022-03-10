import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 44    
  },
  
  icon: {
    fontSize: 20,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.placeholder,
    backgroundColor: theme.color.background,
    paddingHorizontal: 10,
    paddingTop: 13,
    marginRight: 3
  },
  
  input: {
    width: '100%',
    borderBottomWidth: 1,
    fontFamily: theme.fonts.subtitle400,
    backgroundColor: theme.color.background,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 10,
    
  },

  // error: {
  //   fontFamily: theme.fonts.subtitle400,
  //   fontSize: 13,
  //   color: theme.color.attention,
  //   marginBottom: 8,
  //   marginTop: -5,
  //   left: 5,
  // }
})
