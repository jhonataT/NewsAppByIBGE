import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#7f8ca0',
    backgroundColor: '#ebf0f5'
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center'
  },
  selectedItem: {
    
  }
});