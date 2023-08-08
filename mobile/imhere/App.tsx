import { Home } from "@/screens/Home";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Home />
    </>
  )
}

export default App;