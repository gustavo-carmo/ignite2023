import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { stylesheet } from './style'

export function Home() {
    const [eventName, setEventName] = useState('');

    const handleAdd = () => {
        console.log("Abobrinha ", eventName);
        setEventName('');
    }

    return (
      <ScrollView style={stylesheet.container} keyboardShouldPersistTaps="handled">
        <Text style={stylesheet.eventText}>
          Nome do Evento
        </Text>
        
        <Text style={stylesheet.eventDate}>
          Domingo 12 de Março de 2023
        </Text>


        <View style={stylesheet.form}>
          <TextInput style={stylesheet.participantInput} value={eventName} onChangeText={name => setEventName(name)}/>

          <TouchableOpacity style={stylesheet.addButtom} onPress={handleAdd} >
              <Text style={stylesheet.addButtomText}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }