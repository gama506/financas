import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {AntDesing} from "@expo/vector-icons"

export default function Actions () {
       return ( 
       <View>
          <ScrollView
            style={StyleSheet.container}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            >

               <TouchableOpacity style={StyleSheet.botaoAcao}>
             <View style={styles.area}>
            <AntDesing name="addfolder" size={26} color={"#000"}/>
             </View>
             <Text style={styles.tituloBotao}>Entradas</Text>
               </TouchableOpacity>

  <TouchableOpacity style={StyleSheet.botaoAcao}>
             <View style={styles.area}>
            <AntDesing name="tagso" size={26} color={"#000"}/>
             </View>
             <Text style={styles.tituloBotao}>Entradas</Text>
               </TouchableOpacity>

                 <TouchableOpacity style={StyleSheet.botaoAcao}>
             <View style={styles.area}>
            <AntDesing name="creditcard" size={26} color={"#000"}/>
             </View>
             <Text style={styles.tituloBotao}>Entradas</Text>
               </TouchableOpacity>

  <TouchableOpacity style={StyleSheet.botaoAcao}>
             <View style={styles.area}>
            <AntDesing name="barcode" size={26} color={"#000"}/>
             </View>
             <Text style={styles.tituloBotao}>Entradas</Text>
               </TouchableOpacity>

  <TouchableOpacity style={StyleSheet.botaoAcao}>
             <View style={styles.area}>
            <AntDesing name="setting" size={26} color={"#000"}/>
             </View>
             <Text style={styles.tituloBotao}>Entradas</Text>
               </TouchableOpacity>


          </ScrollView>
       </View>
       )
}


const styles = StyleSheet.create({

   
   container: {
      maxHeight: 95, // altura maxima
      marginBottom: 14, // margem em baixo
      marginTop: 18, // margem no topo
      paddingEnd: 20, // gordurinha no final
      paddingStart: 20, // gordurinha no inicio
   },


   area: {
    backgroundColor: "#ecf01",
    height: 60, // altura
    width: 60, // largura
    borderRadius: 30, // arredondar as bordas
    justifyContent: "center", // centralizar conteudo
    alignItems: "center" // alinhar ao centro
   },

   tituloBotao: {
    marginTop: 4, // espaço em cima
    textAlign: "center", // centralizar texto
    fontWeight: "bold" // negrito
   },
})
   