import { StyleSheet, Text, View, SafeAreaView, ScrollView,  } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Mediocampistas() {
  const players = [
  {
      name: 'Gianluigi Donnarumma',
      posicion: 'Portero',
      image: 'https://img.a.transfermarkt.technology/portrait/big/315858-1672304477.jpg?lm=1',
  },
  {
    name: 'Sergio Rico',
    posicion: 'Portero',
    image: 'https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/74/89874.jpg',
  },
  {
    name: 'Alexandre Letellier',
    posicion: 'Portero',
    image: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/a/ale/large/31343.png',
  },
];
return(
  players.map( (player,i)  =>{
    if(player.posicion=="Portero"){
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