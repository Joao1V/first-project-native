import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";


const TDList = () => {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])

  const navigation = useNavigation()

  const addTask = () => {
    if (text.length > 0) {
      let aux = tasks
      aux.push({task: text, completed: false})
      setText('')
      setTasks(aux)
    }

  }

  const renderItem = ({item, index}) => (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={() => onChangeCheckBox(!item.completed, index)}>
        <CheckBox value={item.completed} onValueChange={() => onChangeCheckBox(!item.completed, index)}/>
        <Text style={{textDecorationLine: item.completed ? 'line-through' : 'none', fontSize:18}}>{item.task}</Text>
      </TouchableOpacity>

    </View>
  )

  const onChangeCheckBox = (e, index) => {
    console.log(e);
    let aux = [...tasks]
    aux[index].completed = e
    console.log(aux);
    setTasks(aux)
  }

  const test = useRef()

  return (
    <View style={{backgroundColor: '#e0e0e0', flex: 1}}>
      <View style={{flexDirection: 'row', marginTop:15, marginStart: 5}}>
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

      <View style={{paddingHorizontal:10}}>
          <TextInput placeholder={'Enter the task'}
                     style={styles.textInput}
                     cursorColor={'#757575'}
                     inputAccessoryViewID={(e) => console.log(e)}
                     onChangeText={setText}
                     value={text}
                     ref={test}
          />
        <TouchableOpacity onPress={() => addTask()} style={styles.buttonAddTask}>
          <Icon name="add" size={24} color={'#fff'}/>
          <Text style={{color:'#fff', fontSize:18}}>
            Add task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTasks([])} style={styles.buttonRemoveTask}>
          <Icon name="delete-outline" size={24} color={'#fff'}/>
          <Text style={{color:'#fff', fontSize:18}}>
            Clear tasks
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor:'#fff', marginHorizontal:5, flex: tasks.length > 0 ? 1 : -1,  marginTop: 32, borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
        <View >
          <View style={{borderBottomWidth: 1, borderColor:'#ccc'}}>
            <Text style={{textAlign:'center', fontSize:24, paddingVertical:10}}>My tasks</Text>
          </View>


          <View style={{marginTop:10, padding:16}}>
            <FlatList data={tasks}
                      ListEmptyComponent={<View><TouchableOpacity onPress={() => test.current?.focus()}><Text style={{textAlign: 'center', color:'#007AFF', fontSize:15}}>Add new task</Text></TouchableOpacity></View>}
                      renderItem={renderItem}/>
          </View>

        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderColor:'#ccc',
    borderRadius:15,
    marginTop:10,
    padding:10
  },
  buttonAddTask: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    marginTop:10,
    padding:10,
    borderRadius: 5
  },
  buttonRemoveTask: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ef5350',
    marginTop:10,
    padding:10,
    borderRadius: 5
  }
})
export default TDList
