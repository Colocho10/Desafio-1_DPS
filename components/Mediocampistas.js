import { StyleSheet, Text, View, SafeAreaView, ScrollView,  } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Mediocampistas() {
  const players = [
  {
    name: 'Marco Verrati',
    posicion: 'Medio',
    image: 'https://img.uefa.com/imgml/TP/players/1/2023/324x324/250006200.jpg',
  },
  {
    name: 'Vitinha',
    posicion: 'Medio',
    image: 'https://img.a.transfermarkt.technology/portrait/big/487469-1672303629.jpg?lm=1',
  },
  {
    name: 'Fabián Ruiz',
    posicion: 'Medio',
    image: 'https://www.mundodeportivo.com/files/image_449_220/files/fp/uploads/2022/10/27/635a46dc411e0.r_d.586-322.jpeg',
  },
  {
    name: 'Danilo Pereira',
    posicion: 'Medio',
    image: 'https://cdn.resfu.com/img_data/players/medium/88179.jpg?size=180x&lossy=1',
  },
  {
    name: 'Renato Sanchez',
    posicion: 'Medio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7L3SkBvzNOjlThCXDN80PUJqi3QE0NnvfT94vRRkVCHRHwjn-DaLJbrUggXF_wDbE-XQ&usqp=CAU',
  },
  {
    name: 'Carlos Soler',
    posicion: 'Medio',
    image: 'https://img.a.transfermarkt.technology/portrait/big/372246-1662059930.jpg?lm=1',
  },
];
return(
  players.map( (player,i)  =>{
    if(player.posicion=="Medio"){
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