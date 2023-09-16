import { FlatList, Linking, Share, View } from "react-native";
import { NewsCard } from "../../components/NewsCard";
import { useNewsContext } from "../../core/providers/news";
import { styles } from "./styles";

export const FavoritesScreen = () => {
  const { favoriteList, setFavoriteList } = useNewsContext();

  const handleClickNews = (link) => {
    Linking.openURL(link);
  }

  const handleFavorite = (newsId) => {
    const newFavoriteList = favoriteList.filter(item => item['id'] !== newsId);
    setFavoriteList(newFavoriteList || []);
  }

  const onShare = async (url) => {
    try {
      await Share.share({
        message: (url)
      });
    } catch (error) {
      console.log("Error", error)
    }
  };

  return <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={favoriteList || []}
      keyExtractor={row => `${row['id']}-favorite`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => 
        <NewsCard 
          title={item['titulo']}
          description={item['introducao']}
          date={item['data_publicacao']}
          handleClick={() => handleClickNews(item['link'])}
          handleFavorite={() => handleFavorite(item['id'])}
          handleSharing={() => onShare(item['link'])}
          isFavorite
        />
      }
    />
  </View>
}