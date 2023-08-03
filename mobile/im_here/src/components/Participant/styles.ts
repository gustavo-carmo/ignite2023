import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: '#1F1E25',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    participantText: {
        color: '#FFF',
        fontSize: 16,
        flex: 1,
        marginLeft: 16
    },
    removeButtom: {
      backgroundColor: '#E23C44',
      height: 56,
      width: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    removeButtomText: {
      color: '#FFF',
      fontSize: 24,
    },
})