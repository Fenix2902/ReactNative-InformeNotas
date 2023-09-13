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
  const [observacion, setObservacion] = useState("");
  const [datosGuardados, setDatosGuardados] = useState([]);
  const [idBuscado, setIdBuscado] = useState("");
  const [estudianteEncontrado, setEstudianteEncontrado] = useState(null);


  //funciones
  let Guardar = () => {
    if (IdEstudiante === "" || NombreEstudiante === "" || Asignatura === "") {
      alert("Faltan datos");
    } else {
      let nuevoDato = {
        id: IdEstudiante,
        nombre: NombreEstudiante,
        asignatura: Asignatura,
        nota1: Nota1,
        nota2: Nota2,
        nota3: Nota3,
        promedio: result,
        observacion: observacion,
      };

      // Verificar duplicados
      const existeDuplicado = datosGuardados.some(
        (dato) => dato.id === IdEstudiante && dato.asignatura === Asignatura
      );

      if (existeDuplicado) {
        alert(
          "No se permite guardar notas duplicadas para el mismo estudiante y asignatura."
        );
        return;
      }

      setDatosGuardados((datosPrevios) => [datosPrevios, nuevoDato]);
      setIdEstudiante("");
      setNombreEstudinte("");
      setAsignatura("");
      setNota1("");
      setNota2("");
      setNota3("");
      setResult("");
      setObservacion("");
      alert("datos guardados");
      console.log(datosGuardados);

      setIdBuscado(IdEstudiante);
    }
  };
  let Calcular = () => {
    if (Nota1 === "" || Nota2 === "" || Nota3 === "") {
      alert("faltan notas");
    } else {
      let nota1Valor = parseFloat(Nota1);
      let nota2Valor = parseFloat(Nota2);
      let nota3Valor = parseFloat(Nota3);

      if (!isNaN(nota1Valor) && !isNaN(nota2Valor) && !isNaN(nota3Valor)) {
        if (
          nota1Valor <= 5 &&
          nota1Valor >= 0 &&
          nota2Valor <= 5 &&
          nota2Valor >= 0 &&
          nota3Valor <= 5 &&
          nota3Valor >= 0
        ) {
          let promedio = (
            nota1Valor * 0.3 +
            nota2Valor * 0.35 +
            nota3Valor * 0.35
          ).toFixed(1);

          // Calcular la observación
          let nuevaObservacion = "";
          if (promedio >= 3) {
            nuevaObservacion = "Gana";
          } else if (promedio < 2) {
            nuevaObservacion = "Pierde";
          } else {
            nuevaObservacion = "Habilita";
          }

          // Actualizar el estado de observación
          setObservacion(nuevaObservacion);
          // Actualizar el estado de resultado
          setResult(promedio.toString());
        } else {
          alert("las notas deben ser numeros entre 0 y 5");
        }
      } else {
        alert("los campos no pueden estar vacios");
      }
    }
  };

  let buscarEstudiantePorId = () => {
    // Actualiza idBuscado con el valor de IdEstudiante
    // setIdBuscado(IdEstudiante);
    // Encuentra al estudiante en la lista de datosGuardados
    let estudiante = datosGuardados.find((est) => est.id === idBuscado);
    // Si se encuentra el estudiante, actualiza el estado
    if (estudiante) {
      setEstudianteEncontrado(estudiante);
    } else {
      // Si no se encuentra, muestra un mensaje de error
      setEstudianteEncontrado(null);
      alert("Estudiante no encontrado");
    }
  };

  let getObservationColor = () => {
    switch (observacion) {
      case "Gana":
        return "green";
      case "Pierde":
        return "red";
      case "Habilita":
        return "orange";
      default:
        return "black"; // Color predeterminado si la observación no coincide con ninguna de las opciones anteriores
    }
  };


  return (
    <>
      <View>
        <Text>REGISTRO DE NOTAS</Text>
      </View>
      <View style={[styles.info]}>
        <TextInput
          label="Id. del Estudiante"
          onChangeText={(IdEstudiante) => setIdEstudiante(IdEstudiante)}
          value={IdEstudiante}
          style={[styles.tinputs]}
        />
        <TextInput
          label="Nombre del Estudiante"
          onChangeText={(NombreEstudiante) =>
            setNombreEstudinte(NombreEstudiante)
          }
          value={NombreEstudiante}
          style={styles.tinputs}
        />
        <TextInput
          label="Asignatura"
          onChangeText={(Asignatura) => setAsignatura(Asignatura)}
          value={Asignatura}
          style={styles.tinputs}
        />
        <TextInput
          label="Not. del Momento 1 (30%)"
          value={Nota1}
          onChangeText={(Nota1) => setNota1(Nota1)}
          style={styles.tinputs}
        />
        <TextInput
          label="Not. del Momento 2 (35%)"
          value={Nota2}
          onChangeText={(Nota2) => setNota2(Nota2)}
          style={styles.tinputs}
        />
        <TextInput
          label="Not. del Momento 3 (35%)"
          value={Nota3}
          onChangeText={(Nota3) => setNota3(Nota3)}
          style={styles.tinputs}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Button
          mode="contained"
          icon={"calculator-variant-outline"}
          style={styles.btn}
          onPress={() => Calcular()}
        >
          Calcular
        </Button>
        <Button
          mode="contained"
          icon={"content-save-check-outline"}
          style={styles.btn}
          onPress={() => Guardar()}
        >
          {/* {" "} */}
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
            setIdEstudiante("");
            setNombreEstudinte("");
            setAsignatura("");
            setNota1("");
            setNota2("");
            setNota3("");
            setResult("");
            setObservacion("");
            setEstudianteEncontrado("")

          }}
        >
          Limpiar
        </Button>
        <Button
          mode="contained"
          icon="account-search-outline"
          style={styles.btn}
          onPress={() => buscarEstudiantePorId(IdEstudiante)}
        >
          Buscar
        </Button>
      </View>
      <View style={[styles.tinputs]}>
        {estudianteEncontrado && (
          <View style={styles.tinputs}>
            <Text style={{ fontWeight: "bold" }}>
              Estudiante Encontrado: {estudianteEncontrado.nombre},
            </Text>
            <Text style={{ fontWeight: "bold" }}>
            Promedio Estudiante: {estudianteEncontrado.promedio}
            </Text>
            <Text style={{ color: getObservationColor(), fontWeight: "bold" }}>
            Observación al Estudiante: {estudianteEncontrado.observacion}
            </Text>
            {/* Puedes mostrar otros detalles del estudiante aquí */}
          </View>
        )}
        <Text style={{ fontWeight: "bold" }}> {result}</Text>
        <Text style={{ color: getObservationColor(), fontWeight: "bold" }}> {observacion}</Text>
        {/* <Text style={{ color: getObservationColor(), fontWeight: "bold" }}> {observacion}</Text> */}
      </View>
    </>
  );
}
