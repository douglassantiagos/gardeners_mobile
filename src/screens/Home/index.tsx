import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
        </View>
        
        <SearchBar />         

        <View style={styles.content}>
          <Text style={styles.title}>
            Plantas mais populares
          </Text>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  )
}