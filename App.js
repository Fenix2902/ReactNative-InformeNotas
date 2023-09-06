import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "./assets/styles/styles1";
import { useState } from "react";

export default function App() {
  //states
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [result, setResult] = useState("");
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View>
        <Text>hola mundo</Text>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: "red",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          label="Identificación del Estudiante"
          style={{ margin: 5 }}
        />
        <TextInput label="Nombre del Estudiante" style={{ margin: 5 }} />
        <TextInput label="Asignatura" style={{ margin: 5 }} />
        <TextInput label="Asignatura" style={{ margin: 5 }} />
        <TextInput label="Nota del Momento 1 (30%)" style={{ margin: 5 }} />
        <TextInput label="Nota del Momento 2 (35%)" style={{ margin: 5 }} />
        <TextInput label="Nota del Momento 3 (35%)" style={{ margin: 5 }} />
        {/* <TextInput label="Nota Definitiva (calculado)" style={{margin:5}}/>
        <TextInput label="Observaciòn (calculado)" style={{margin:5}}/> */}
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Button mode="contained" onPress={() => console.log("click")}>
          Calcular
        </Button>
        <Button mode="contained" onPress={() => console.log("click")}>
          {" "}
          Guardar
        </Button>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15, marginBottom: 15 }}>
        <Button
          mode="contained"
          buttonColor="red"
          icon="close-circle-outline"
          onPress={()=>{
            setNota1("")
            setNota2("")
            setResult("")
          }}
        >
          Limpiar
        </Button>
        <Button mode="contained">Buscar</Button>
      </View>
    </View>
  );
}
