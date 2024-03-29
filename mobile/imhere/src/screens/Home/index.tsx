import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "@/components/Participant";

const Home = () => {
    const participants = ['John', 'Johny', 'Gustavo', 'Mahanian'];

    function handleParticipantAdd() {
        if (participants.includes("Gustavo")) {
            return Alert.alert("Participante existe", "Já existe um participante com esse nome!")
        }
        console.log("Adicionando...");
    }
    function handleParticipantRemove(name: string) {
        
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log("Adicionando...", name);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do Evento
        </Text>
        
        <Text style={styles.eventDate}>
            Sexta, 4 de Novembro de 2022
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
            />

            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
        
        <FlatList 
            data={participants} 
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>    
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmpty}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
        
      </View>
    )
  }
  
  export { Home };