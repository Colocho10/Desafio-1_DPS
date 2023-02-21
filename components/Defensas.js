import { StyleSheet, Text, View, SafeAreaView, ScrollView,  } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Mediocampistas() {
  const players = [
  {
    name: 'Achraf Hakimi',
    posicion: 'Defensa',
    image: 'https://assets-es.imgfoot.com/media/cache/1200x900/achraf-hakimi-1920-613c828f0f1d0.jpg',
  },
  {
    name: 'Presnel Kimpembe',
    posicion: 'Defensa',
    image: 'https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/09/16809.jpg',
  },
  {
    name: 'Sergio Ramos',
    posicion: 'Defensa',
    image: 'https://img.a.transfermarkt.technology/portrait/big/25557-1640014004.jpg?lm=1',
  },
  {
    name: 'Marquinhos',
    posicion: 'Defensa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaL7_mZIYwuweS3GoTaFhWHGBcDc58rB1gQgnwWn9p&s',
  },
  {
    name: 'Juan Bernat',
    posicion: 'Defensa',
    image: 'https://img.a.transfermarkt.technology/portrait/big/126719-1672304606.jpg?lm=1',
  },
  {
    name: 'Nuno Mendes',
    posicion: 'Defensa',
    image: 'https://img.uefa.com/imgml/TP/players/1/2023/324x324/250136465.jpg',
  },
];
return(
  players.map( (player,i)  =>{
    if(player.posicion=="Defensa"){
return(
      <ListItem key={i} buttomDivider>
      <Avatar rounded source={{uri:player.image}}/>
      <ListItem.Content>
      <ListItem.Title>{player.name}</ListItem.Title>
      <ListItem.Subtitle>{player.posicion}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron/>
      </ListItem>
    )
    }
  }
))}

const styles = StyleSheet.create({
})