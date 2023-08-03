import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screems/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </>
  )
}

