import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Card } from '@rneui/themed';
import Delanteros from './components/Delanteros';
import Mediocampistas from './components/Mediocampistas';
import Defensas from './components/Defensas';
import Porteros from './components/Porteros';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Champions League</Text>
      <ScrollView style={styles.scrollStyle}>
      <Card.Title style={styles.card}>Paris Saint-Germain</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"center"}}>
          <Image
              style={{width:"100%", height:100}}
              resizeMode="contain"
              source={{ uri: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" }}
            />
          <Text style={styles.psg}>PSG</Text>
          <Text style={styles.psg}>El Paris Saint-Germain Football Club, 
          conocido popularmente por sus siglas PSG, es una entidad polideportiva
           francesa con sede en París.</Text>
         </View>
         <Text style={styles.text2}>Plantilla</Text>

      <Text style={styles.text}>Delanteros</Text>
      <Delanteros/>
      <Text style={styles.text}>Medios</Text>
      <Mediocampistas/>
      <Text style={styles.text}>Defensas</Text>
      <Defensas/>
      <Text style={styles.text}>Porteros</Text>
      <Porteros/>



      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1e65',
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'left',
    color: 'white',
    padding: 10,
  },
  text1:{
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    color: 'white',
    padding: 10,
  },
  text2: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color: 'white',
    padding: 10,
  },
  scrollStyle:{
    backgroundColor: '#1d1e4e',
  },

  card:{
    fontSize: 30,
    color: 'white',
    backgroundColor:'#233760',
  },

  psg: {
    fontSize: 20,
    color: 'white',
    textAlign: 'justify',
    padding: 10
  }
});
