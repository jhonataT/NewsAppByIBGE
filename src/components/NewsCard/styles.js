import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#7f8ca0',
    marginBottom: 16,

    padding: 8,
    paddingBottom: 84,
    borderRadius: 8,

    position: 'relative'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12.5,
    fontWeight: '400',
    marginTop: 8
  },
  date: {
    position: 'absolute',
    bottom: 8,
    left: 8,

    fontSize: 12
  },
  toFavorite: {
    position: 'absolute',
    bottom: 8,
    right: 8,

    fontSize: 12
  },
  toShare: {
    position: 'absolute',
    bottom: 8,
    right: 40,
  }
})