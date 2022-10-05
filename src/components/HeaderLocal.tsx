import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
import Colors from './Colors';
import HermesBadge from './HermesBadge';


const HeaderLocal = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  let imgDefault='../../assets/loteria.png';
  
  return (
    <ImageBackground
      source={require(imgDefault)}    

      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <HermesBadge />
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
         {props.texto}
      </Text>
    </ImageBackground>





  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default HeaderLocal;
