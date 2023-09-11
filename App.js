import React from "react";
import { View } from "react-native";
import { styles } from "./assets/styles/styles1";
import { Formulario } from "./src/components/formulario";



export default function App() {
  return (
    <View style={styles.container}>
      <Formulario/>
    </View>
  );
}
