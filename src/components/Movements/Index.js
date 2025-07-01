import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-web";
export default function Movements({ dados }) {
  const [mostrarValor, setMostrarValor] = useState(false);

  // CRIANDO UAM FUNÇÃO PARA TRANSFORMAR EM MOEDA
  function transformarEmMoeda(dinheiro) {
    return dinheiro.tolocalString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  <TouchableOpacity style={styles.container}>
    <Text style={styles.data}>{dados.data}</Text>

    <Text style={styles.conteudo}>
      {dados.titulo}

      {mostrarValor ? (
      <Text style={styles.tipo === 1 ? styles.valor : styles.despesas
      <Text style={styles.transformarEmMoeda(dados.valor)${}`}>
      }
        </Text>
      ) : (
        <View></View>
      )}
  </TouchableOpacity>;
}

const styles = StyleSheet.create[{}];
