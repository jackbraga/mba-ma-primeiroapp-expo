import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Sorteio from './Sorteio';
import React, {useState} from 'react';

const ImageBola = (props) => {

    const [show, setShow] = useState(false);

    return (     

<View style={styles.sorteioBola}>

    <ImageBackground 
        source={require('../../assets/bola.png')} 
        style={styles.image} 
        resizeMode="contain">
        <Text style={styles.bola}>
            {show ?
                <Sorteio min={1} max={60} ></Sorteio>
                : null
            }
        </Text>
    </ImageBackground>

    <TouchableOpacity style={styles.button} onPress={()=>setShow(!show)}>
        <Text>Sortear numero...</Text>
    </TouchableOpacity>
</View>


);
};

const styles = StyleSheet.create({

    sorteioBola:{
        flex: 1,
        paddingTop:10,
        marginTop:30,
        display: 'flex',
        flexDirection: 'row',       
        alignItems:'center',

      },
    bola: {
      color: '#AAA',
      fontSize: 70,  

      textAlign:'center'

  
    },
    image:{
        height: 100,
        width: 100,
        
    },
    button:{
        borderWidth:1,
        borderColor: '#555',
        padding:10,
        borderRadius: 25,
        backgroundColor: '#999',
        
        justifyContent:'center',
         maxHeight:48
    }
});
    export default ImageBola;