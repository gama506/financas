import { View } from "react-native-web";
import Header from "../../components/Header/Index";
import Balance from "../../components/Balance/Index";
import { StyleSheet } from "react-native";
const lista = [
  {
    id: 1,
    titulo: "Boleto de luz",
    valor: 230,
    data: "23/06/2025",
    tipo: 0,
  },
  {
    id: 2,
    titulo: "Boleto de agua",
    valor: 139,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 3,
    titulo: "Conta de internet",
    valor: 290,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 4,
    titulo: "Boleto de luz",
    valor: 230,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 5,
    titulo: "dizimo",
    valor: 40,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 6,
    titulo: "aluguel",
    valor: 500,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 7,
    titulo: "transferência de nicolas",
    valor: 100,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 8,
    titulo: "transferência de sofia",
    valor: 300,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 9,
    titulo: "transferência de sophia",
    valor: 900,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 10,
    titulo: "transferência de ana julia",
    valor: 1000,
    data: "23/06/2025",
    tipo: 1,
  },
];
export default function Home() {
  return (
    <View style={style.container}>
      <Header />

      <Balance saldo={"R$ 1200,00"} gastos={"R$ 600,00"} />

      <Action />

      <Text style={StyleSheet.titulo}>Últimas movimentações</Text>
    </View>
  );
}

const styles = StyleSheet.create[{
    
}]