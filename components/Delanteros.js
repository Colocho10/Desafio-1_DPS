import { StyleSheet, Text, View, SafeAreaView, ScrollView,  } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Delanteros() {
  const players = [
  {
    name: 'Kylian Mbappe',
    posicion: 'Delantero',
    image: 'https://es.coachesvoice.com/wp-content/uploads/2022/03/mbappemobile-scaled.jpg',
  },
  {
    name: 'Lionel Messi',
    posicion: 'Delantero',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g',
  },
  {
    name: 'Neymar',
    posicion: 'Delantero',
    image: 'https://www.fichajes.com/build/images/player-covers/neymar.2696f492.jpg',
  },
  {
    name: 'Hugo Ekitike',
    posicion: 'Delantero',
    image: 'https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/43/81543.jpg',
  },
];
return(
  players.map( (player,i)  =>{
    if(player.posicion=="Delantero"){
return(
      <ListItem key={i} buttomDivider>
      <Avatar rounded source={{uri: player.image}}/>
      <ListItem.Content>
      <ListItem.Title style={styles.text}>{player.name}</ListItem.Title>
      <ListItem.Subtitle style={styles.text}>{player.posicion}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron/>
      </ListItem>
    )
    }
  }
))}

const styles = StyleSheet.create({
    text: {
        fontStyle: 'bold'
    }
})