import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Login({ navigation }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    if (id === 'a' && pw === 'a') {
      Alert.alert('업데이트!', `${id} 사용자는 활성화되지 않았습니다.`);
    } else {
      Alert.alert('알림 실패', '알림 실패.');
    }
  };

  const renderFontHtml = () => {
    return `
      <html>
      <head>
        <style>
          @font-face {
            font-family: 'yg-jalnan';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          body {
            font-family: 'yg-jalnan';
            text-align: center; /* 텍스트를 수평으로 중앙 정렬 */
            background-color: #F5A9A9;
          }
        </style>
      </head>
      <body>
        <div style="font-size: 110px; margin-top: 160px; color:white;">오늘 뭐 입지?</div>
      </body>
      </html>
    `;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <WebView
          source={{ html: renderFontHtml()}}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 18, marginTop:15}}>ID</Text>
        <TextInput
          style={styles.input_id}
          value={id}
          onChangeText={(text) => setId(text)}
          placeholder="아이디"
          keyboardType="email-address"
        />
        <Text style={{ fontSize: 18 }}>Password</Text>
        <TextInput
          style={styles.input_pw}
          value={pw}
          onChangeText={(text) => setPw(text)}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('가입')}>
          <Text style={{ color: 'black', fontSize: 16 }}>Sign Up?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={{ color: 'white', fontSize: 16 }}>로그인</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5A9A9',
    borderWidth:1,
    borderColor:'#F5A9A9',
  },
  topContainer: {
    flex: 3, // 위쪽 영역의 높이 비율을 3으로 설정
    borderWidth:1,
    borderColor:'#F5A9A9'
  },  
  bottomContainer: {
    flex: 7,
    justifyContent: 'center',
    padding: 20,  
    borderWidth: 0.1,
    borderBottomColor: '#F5A9A9',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: 'white',
  },
  input_id: {
    width: 350,
    height: 60,
    marginVertical: 10,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom:25,
  },
  input_pw: {
    width: 350,
    height: 60,
    marginVertical: 10,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  login:{
    width: 300,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderRadius: 30,
    marginTop:35,
    marginLeft:25,
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:275,
    borderWidth:0,
    borderRadius: 0,
  },
});
