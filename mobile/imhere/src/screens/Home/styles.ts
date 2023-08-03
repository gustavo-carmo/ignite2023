import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      marginTop: 48,
      fontWeight: 'bold'
    },
    eventDate: {
      fontSize: 16,
      color: '#6b6b6b',
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    buttonContainer: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop:36,
        marginBottom: 42
    }
  });

  export { styles };