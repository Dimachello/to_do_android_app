import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, TextInput, Button } from 'react-native';


const Login = ({navigation}) => {

    const [name,setName] = useState('');
    const [pswd,setPswd] = useState('');

    const AlertHandler = () => {
        Alert.alert(
            'Error',
            'All fields require some value',
            [
                {
                    text: "Ok"
                }
            ],
            {cancelable: false}
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={styles.formTitle}>Login Form</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input1}
              placeholder="Enter random name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input2}
              secureTextEntry
              placeholder="Enter random password"
              value={pswd}
              onChangeText={setPswd}
            />
            <View
              style={styles.submit}
            >
              <Button
                title="Submit"
                onPress={() => {
                    if(name.length && pswd.length) {
                        navigation.navigate('MainPage', {userName: name})
                    } else {
                        AlertHandler()
                    }
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTitle: {
      marginBottom: 10,
      fontSize: 20
    },
    form: {
      width: '100%',
      paddingTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input1: {
      width: '100%',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgb(145,143,142)',
      borderRadius: 5
    },
    input2: {
      width: '100%',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgb(145,143,142)',
      borderRadius: 5
    },
    submit: {
      width: '25%',
      alignSelf: 'flex-end'
    }
  });

export default Login;
