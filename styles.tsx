import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#fff', // Opcional: fundo branco
  },
  imagemPequena: {
    width: '80%',          // Largura em porcentagem
    height: undefined,     // Altura automática
    aspectRatio: 1,        // Mantém proporção quadrada (ajuste conforme sua imagem)
    // Ou você pode usar tamanhos fixos:
    // width: 100,
    // height: 100,
  },
  fontTitulo:{
    textAlign: 'center',
    color: '#AEBF6F',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonStyle:{
    backgroundColor: '#AEBF6F',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    paddingVertical: 12,
    width: 150,
    borderRadius: 4,
    fontSize: 16,
    elevation: 3,
    margin: 10,
  },
  errorInput: {
  borderColor: 'red',
  borderWidth: 1,
},
  imputer:{
    backgroundColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    paddingVertical: 12,
    width: '70%',
    borderRadius: 4,
    fontSize: 16,
    elevation: 3,
    margin: 10,
  },
  text:{
    color:'black'
  }
});