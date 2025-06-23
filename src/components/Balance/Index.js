import { StyleSheet } from "react-native";
import { ImageBackground, View } from "react-native-web";

export default function Balance(saldo, gastos) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.tituloItem}>Saldo</Text>
        <View style={styles.conteudo}>
          <Text style={styles.saldo}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.tituloItem}>Saldo</Text>
        <View style={styles.conteudo}>
          <Text style={styles.saldo}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    BackgroundColor: "#fff", // cor de fundo
    flexDirection: "row", // alinhar na mesma linha
    justifytContent: "space-between", // dar um espaço entre os itens

    paddingStart: 18, // gordurinha no começo
   paddingEnd: 18, // gordurinha no final
   marginTop: -24, // margem no topo
   marginStart: 14, // margem no começo
   marginEnd: 14, // margem no final
   borderRadius: 4, // arredondar as bordas
   paddingTop: 22, // gordurinha no topo
   paddingBottom: 22, // gordurinha embaixo
   zIndex: 99 // sobrepoe tudo
  },
tituloItem: {
   fontSize: 20, // tamanho da letra
   color: "#dadada" // cor da letra
},

 conteudo: {
flexDirection: "row", // deixar na mesma linha
alignItems: "center" // alinha no centro
},

saldo: {
   fontSize: 22, // tamanho da letra
   color: "#e74c3c" // cor da letra
}
});
