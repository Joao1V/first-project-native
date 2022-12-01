import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Vibration, Share} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Calculator = () => {
  const [value, setValue] = useState({v1:{}, v2:{}})
  const [resultText, setResultText] = useState()

  const navigation = useNavigation();

  const calc = (e) => {
    switch (e) {
      case `som`:
        let som = (value?.v1) + (value?.v2);
        operador(e, som)
        break;
      case `sub`:
        let sub = (value?.v1) - (value?.v2);
        operador(e, sub);
        break;
      case `div`:
        let div = (value?.v1) / (value?.v2);
        operador(e, div)
        break;
      case `mul`:
        let mul = (value?.v1) * (value?.v2);
        operador(e, mul)
        break;
      case `clear`:
        setValue({v1:'', v2:''})
        setResultText(null)
        break;
    }
    console.log(value);
  }

  const operador = (op, result) => {

    let text
    let colorText
    switch (op) {
      case `som`:
        text = `SOMA`
        colorText = '#6ea8fe'
        break;
      case `sub`:
        text = `SUBTRAÇÃO`
        colorText = '#f00'
        break;
      case `mul`:
        text = `MULTIPLICAÇÃO`
        colorText = '#479f76'
        break;
      case `div`:
        text = `DIVISÃO`
        colorText = '#087990'
        break;
    }
    Vibration.vibrate()
    return setResultText(
      <Text style={{fontSize:24, marginTop:32}}>
        O resultado da <Text style={{color: colorText, fontWeight: `bold`}}>{text}</Text> é <Text style={{fontWeight: `bold`, color:'#000'}}>{result}</Text>
      </Text>)
  }

  const onShare = async () => {
    const result = await Share.share({
      message: 'JOAOZINHO UM DEUS DO NATIVE'
    })
  }


  return (
    <>
      <View style={{marginTop:10}}>
        <Button title="TODO LIST" onPress={() => navigation.navigate('TDList')} />
      </View>
      <View style={styles.sectionContainer}>

        <Text style={{marginBottom: 16, fontSize:32, textAlign:'center', fontWeight:'bold'}}>
          Calculadora
        </Text>

        <View>
          <View>
            <Text style={{fontSize: 14}}>
              Digite um número
            </Text>
            <TextInput
              style={styles.input}
              value={value?.v1}
              keyboardType={'numeric'}
              placeholder={'Insira o número'}
              onChangeText={(e) => setValue({...value, v1: Number(e)})}

            />
          </View>

          <View>
            <Text style={{fontSize: 14}}>
              Digite outro número
            </Text>
            <TextInput
              style={styles.input}
              value={value?.v2}
              keyboardType={'numeric'}
              placeholder={'Insira outro número'}
              onChangeText={(e) => setValue({...value, v2: Number(e)})}

            />
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{flex:1, marginHorizontal: 5}}>
              <TouchableOpacity onPress={() => calc('som')}
                                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  Somar
                </Text>
              </TouchableOpacity>

            </View>
            <View style={{flex:1, marginHorizontal: 5}}>
              <Button
                onPress={() => calc('sub')}
                title='Subtrair'
                color='#f00'

              />
            </View>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <View style={{flex:1, margin: 5}}>
            <Button
              onPress={() => calc('div')}
              title='Dividir'
              color='#087990'

            />
          </View>
          <View style={{flex:1, margin: 5}}>
            <Button
              onPress={() => calc('mul')}
              title='Multiplicar'
              color='#479f76'

            />
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1, margin: 5}}>
            <Button
              onPress={() => calc('clear')}
              title='limpar'
              color='#000'

            />
          </View>
        </View>

        <View>
          {resultText &&
            <>
              {resultText}
              <TouchableOpacity onPress={onShare} style={{width: '50%', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',  backgroundColor: '#2196F3', padding:10, borderRadius:32, marginTop: 10}}>
                <Text style={{color: '#fff'}}>
                  Compartilhar
                </Text>
              </TouchableOpacity>
            </>
          }
        </View>
      </View>



    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingVertical: 14,
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginTop: 5,
    marginBottom:10,
    borderWidth:1,
    borderRadius:5,
  },
  buttonContainer: {
    backgroundColor: '#6ea8fe',
    height:30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize:20
  }

});

export default Calculator;
