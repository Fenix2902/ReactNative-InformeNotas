import React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles1";


export function Formulario() {
    //states
    const [IdEstudiante, setIdEstudiante] = useState("");
    const [NombreEstudiante, setNombreEstudinte] = useState("");
    const [Asignatura, setAsignatura] = useState("");
    const [Nota1, setNota1] = useState("");
    const [Nota2, setNota2] = useState("");
    const [Nota3, setNota3] = useState("");
    const [result, setResult] = useState("");
    return (
        <>
            <View>
                <Text>REGISTRO DE NOTAS</Text>
            </View>
            <View
                style={[styles.info]}
            >
                <TextInput label="Id. del Estudiante" style={[styles.tinputs]} />
                <TextInput label="Nombre del Estudiante" style={styles.tinputs} />
                <TextInput label="Asignatura" style={styles.tinputs} />
                <TextInput label="Not. del Momento 1 (30%)" style={styles.tinputs} />
                <TextInput label="Not. del Momento 2 (35%)" style={styles.tinputs} />
                <TextInput label="Not. del Momento 3 (35%)" style={styles.tinputs} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Button
                    mode="contained"
                    icon={"calculator-variant-outline"}
                    style={styles.btn}
                    onPress={() => console.log("click")}>
                    Calcular
                </Button>
                <Button
                    mode="contained"
                    icon={"content-save-check-outline"}
                    style={styles.btn}
                    onPress={() => console.log("click")}>
                    {" "}
                    Guardar
                </Button>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
                <Button
                    mode="contained"
                    buttonColor="red"
                    style={styles.btn}
                    icon="close-circle-outline"
                    onPress={() => {
                        setNota1("")
                        setNota2("")
                        setResult("")
                    }}
                >
                    Limpiar
                </Button>
                <Button
                    mode="contained"
                    icon="account-search-outline"
                    style={styles.btn}>Buscar</Button>
            </View>
            <View style={[styles.tinputs]}>
                <Text>Resultado</Text>
                <Text>Resultado</Text>
                {/* <TextInput label="Nota Definitiva (calculado)" style={{ margin: 5 }} />
                <TextInput label="Observaciòn (calculado)" style={{ margin: 5 }} /> */}
            </View>
        </>
    );
}