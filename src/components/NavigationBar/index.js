import { Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export const NavigationBar = () => {
  const { navigate } = useNavigation();

  return <View style={styles.container}>
    <View style={styles.content}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Home')}>
        <Ionicons
          name="newspaper-outline"
          size={24}
          color='#7f8ca0'
        />
        <Text>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Favorites')}>
        <AntDesign
          name="staro"
          size={24}
          color='#7f8ca0'
        />
        <Text>Favorites</Text>
      </TouchableOpacity>
    </View>
  </View>
}