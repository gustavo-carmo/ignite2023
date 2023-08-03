import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
      backgroundColor: '#010110',
      flex: 1,
      padding: 24
    },
    eventText: {
      color: '#FDFCFE',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    participantInput: {
      flex: 1,
      borderRadius: 5,
      padding: 16,
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#1F1E25',
      marginRight: 7,
    },
    addButtom: {
      backgroundColor: '#31CF67',
      height: 56,
      width: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addButtomText: {
      color: '#FFF',
      fontSize: 24,
    },
    form: {
      marginTop: 36,
      marginBottom: 36,
      width: '100%',
      flexDirection: 'row',
    }
  });