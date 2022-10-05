import { StatusBar } from 'expo-status-bar';
import {  useState } from 'react';
import { ScrollView, StyleSheet,  TextInput,  View } from 'react-native';

import HeaderLocal from './src/components/HeaderLocal';
import ImageBola from './src/components/ImageBola';

interface LocalImage{
  defaultUri?: string;
  remoteUri?: string;
}


export default function App() {

  const [titulo, setTitulo] = useState('Simulador de Loteria');
   return (
    <ScrollView>
      <HeaderLocal texto={titulo}/>
      <View style={styles.container}>
        
        <View  style={styles.text}>
          <TextInput style={styles.input} 
                      placeholder="Modificar texto de título"
                      onChangeText={(titulo) =>{
                        setTitulo(titulo)
                      }}
            />

        </View>
                    
          <ImageBola></ImageBola>
          <ImageBola></ImageBola>
          <ImageBola></ImageBola>
          <ImageBola></ImageBola>
          <ImageBola></ImageBola>
          <ImageBola></ImageBola>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  bola: {
    flex:1,
    color: '#AAA',
    fontSize: 70,  
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    textAlignVertical: 'center',
    position:'absolute',

  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:235,
  },
  input: {
    fontSize: 18
  },


  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  sorteioBola:{
    flex: 1,
    paddingTop:10,
    marginTop:30,
    display: 'flex',
    flexDirection: 'row',
  },
});
