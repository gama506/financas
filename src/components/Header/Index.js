import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const alturaDaBarra = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>JUAOO</Text>

        <TouchableOpacity style={styles.botao}>
          <Feather name="user" size={27} color={"#"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#800ff", // cor de fundo
    flexDirection: "row", // alinha na mesma linha
    paddingStart: 16, // gordurinha no inicio
    paddingEnd: 16, // gordurinha no final
    paddingBottom: 44, // gordurinha na parte de baixo
    paddingTop: alturaDaBarra, // gordurinha no topo
  },

  conteudo: {
    flex: 1, // Ocupar toda a caixa
    alignItems: "center", // alinhar na mesma linha
    justifyContent: "space-between", // Dar espaço
  },

  nome: {
    fontSize: 18, // altura da letra
    color: "fff", // cor da letra
    fontWeight: "bold", // negrito
  },
  botao: {
    width: 44, // largura
    height: 44, // altura
    backgroundColor: "rgba(255,255,255, 0.5)", // cor de fundki-
    justifyContent: "center",
    alignItems: "center", // alinhar itens ao centro
    borderRadius: "50%", // deixar uma bolinha
  },
});
