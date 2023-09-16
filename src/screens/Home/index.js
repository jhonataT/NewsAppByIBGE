import { useEffect } from "react";
import { FlatList, Share, View } from "react-native";
import { Linking } from 'react-native';
import axios from 'axios';
import * as Sharing from 'expo-sharing';
import { useNewsContext } from "../../core/providers/news";
import { styles } from "./styles";
import { NewsCard } from "../../components/NewsCard";

const loadNews = async (setNews) => {
  try {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=13');
    setNews(response?.data || []);
  } catch(error) {
    console.log("Erro ao buscar notícias", error);
  }
}

export const HomeScreen = () => {
  const { news, setNews, favoriteList, setFavoriteList } = useNewsContext();

  useEffect(() => {
    if(!news || !news.length) {
      loadNews(setNews);
    }
  }, []);

  const handleClickNews = (link) => {
    Linking.openURL(link);
  }

  const handleFavorite = (newsToFavorite) => {
    const hasFavorite = favoriteList.find(item => item['id'] === newsToFavorite['id']);

    if(hasFavorite) {
      const newFavoriteList = favoriteList.filter(item => item['id'] !== newsToFavorite['id']);
      setFavoriteList(newFavoriteList || []);
    } else {
      setFavoriteList([...favoriteList, newsToFavorite]);
    }
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
      data={news?.items || []}
      keyExtractor={row => `${row['id']}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => 
        <NewsCard 
          title={item['titulo']}
          description={item['introducao']}
          date={item['data_publicacao']}
          handleClick={() => handleClickNews(item['link'])}
          handleFavorite={() => handleFavorite(item)}
          isFavorite={(favoriteList && favoriteList.find(row => row['id'] === item['id'])) ? true : false}
          handleSharing={() => onShare(item['link'])}
        />
      }
    />
  </View>
}