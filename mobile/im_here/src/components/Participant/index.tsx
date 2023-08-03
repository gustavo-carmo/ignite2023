import { Text, TouchableOpacity, View } from "react-native";
import { stylesheet } from "./styles";

type Props = {
    name: string;
    onPressButton: () => void;
}

export function Participant({ name, onPressButton }: Props) {
    return (
        <View style={stylesheet.container}>
            <Text style={stylesheet.participantText}>{name}</Text>

          <TouchableOpacity style={stylesheet.removeButtom} onPress={onPressButton}>
              <Text style={stylesheet.removeButtomText}>-</Text>
          </TouchableOpacity>
        </View>
    )
}