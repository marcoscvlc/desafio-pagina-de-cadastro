import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import digiLogo from './src/img/digimon.png';
import { styles } from './styles';

export default function Home() {
  //aqui vc cria uma variavel pra chamar a função de navegar
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./src/img/digimon.png')} style={{aspectRatio:1, width: 300, height: 300}}/>
      
      <Text style={styles.fontTitulo}>Bem-vindo ao DigiPortal</Text>
      <Text>Efetue seu cadastro para receber novidades do mundo digital</Text>
      <Text style={styles.buttonStyle} onPress={() => {navigate('Details')}}>
        <Text>Cadastre-se!</Text>
      </Text>
    </View>
  );
}

