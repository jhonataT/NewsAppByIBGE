import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";

export const NewsCard = ({ title, description, date, isFavorite = false, handleClick, handleFavorite, handleSharing }) => {
  return <TouchableOpacity style={styles.container} onPress={handleClick}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Text style={styles.date}>{date}</Text>
    <TouchableOpacity style={styles.toFavorite} onPress={handleFavorite}>
      <AntDesign
        name={isFavorite ? 'star' : 'staro'}
        size={24}
        color={isFavorite ? '#f79533' : '#7f8ca0'}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.toShare} onPress={handleSharing}>
      <AntDesign
        name='sharealt'
        size={24}
        color='#7f8ca0'
      />
    </TouchableOpacity>
  </TouchableOpacity>
}