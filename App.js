import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import styled from 'styled-components/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;
const HeaderText = styled.Text`
  font-size:25px;
`;
const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;
const CalcButton = styled.Button`
  margin-top:10px;
`;
const ResultArea = styled.View`
  width:100%;
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
`;
export default() => {
  const [bill,setBill] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);
    if(nbill){
      setTip((10/100) * nBill);
    }else{
      alert("Digite o valor da conta: ")
    }
  }

  return(
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
      placeholder="Quanto deu a conta?"
      placeholderTextColor="#000"
      keyboardType="numeric"
      value={bill}
      onChangeText={n=>setBill(n)}
      />
      <CalcButton title="Calcular" onPress={calc}/>
    </Page>
  );
}
