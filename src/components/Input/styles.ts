import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 8,
    
  },
  
  icon: {
    fontSize: 20,    
    borderTopLeftRadius: 8,
    color: theme.color.placeholder,
    backgroundColor: theme.color.heading,
    paddingHorizontal: 10,
    paddingTop: 13,
    marginRight: 3
  },
  
  input: {
    width: 268,
    borderBottomWidth: 1,
    fontFamily: theme.fonts.subtitle400,
    backgroundColor: theme.color.heading,
    borderTopRightRadius: 8,
    padding: 10,
    
  },
})
