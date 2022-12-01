import React from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";


const TDList = () => {
  const navigation = useNavigation()

  return (
    <View style={{marginTop:15, marginStart: 5}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row', alignItems:'center'}}>
          <Icon name="arrow-back" size={24}/>
          <Text>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:32, alignSelf: 'center'}}>
        <Text style={{fontSize: 26, textDecoration:'underline', fontWeight: 'bold'}}>
          TODO LIST
        </Text>
      </View>
    </View>
  )
}

export default TDList
