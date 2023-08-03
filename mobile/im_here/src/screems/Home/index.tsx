import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { stylesheet } from './style'

export function Home() {
    const [participants, setParticipants] = useState<string[]>(['Gustavo']);
    const [participantName, setParticipantName] = useState('');

    const handleAdd = () => {
      
      if (participants.includes(participantName)) {
        return Alert.alert('Não é possivel adicionar!', `Já existe um participante com o nome ${participantName}`);
      }

      setParticipants(prevState => [...prevState, participantName]);
      
      setParticipantName('');
    }

    function handleRemove(name: string) {
      return Alert.alert('Remover', `Você deseja remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Participante removido!')
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]);
    }

    return (
      <View style={stylesheet.container} >
        <Text style={stylesheet.eventText}>
          Nome do Evento
        </Text>
        
        <Text style={stylesheet.eventDate}>
          Domingo, 12 de Março de 2023
        </Text>


        <View style={stylesheet.form}>
          <TextInput 
            style={stylesheet.participantInput} 
            value={participantName} 
            onChangeText={setParticipantName}
            placeholder="Nome do Participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={stylesheet.addButtom} onPress={handleAdd} >
              <Text style={stylesheet.addButtomText}>+</Text>
          </TouchableOpacity>
        </View>


        <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant 
              name={item}
              onPressButton={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={stylesheet.nonParticipantComponent}>Nâo existem participantes ainda neste evento</Text>
          )}
        />
      </View>
    )
  }