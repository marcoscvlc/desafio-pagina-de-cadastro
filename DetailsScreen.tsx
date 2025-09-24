import { View, Text, TextInput, ToastAndroid } from 'react-native';
import {styles} from './styles';
import React, { useState } from 'react';

export default function Details() {
  const [digimonName, setDigimonName] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [birthDate, setBirthDate] = useState('');
  
  // Estados para controle de erro visual
  const [nameError, setNameError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [digimonError, setDigimonError] = useState(false);

  // Máscara para data (formata automaticamente DD/MM/AAAA)
  const formatDate = (text: string) => {
    let formattedText = text.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    if (formattedText.length > 2) {
      formattedText = formattedText.substring(0, 2) + '/' + formattedText.substring(2);
    }
    if (formattedText.length > 5) {
      formattedText = formattedText.substring(0, 5) + '/' + formattedText.substring(5, 9);
    }
    
    return formattedText;
  };

  const handleDateChange = (text: string) => {
    setBirthDate(formatDate(text));
    setDateError(false); // Reseta o erro ao editar
  };

  // Validações (com atualização do estado de erro visual)
  const validateTextInput = (text: string, fieldName: string) => {
    const trimmedText = text.trim();
    const isValid = trimmedText.length >= 2 && /^[a-zA-ZÀ-ÿ\s]+$/.test(trimmedText);
    
    if (fieldName === 'Nome') setNameError(!isValid);
    if (fieldName === 'Cidade') setCityError(!isValid);
    
    return isValid;
  };

  const validateBirthDate = () => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
      setDateError(true);
      return false;
    }

    const [day, month, year] = birthDate.split('/').map(Number);
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age > 99 || year > currentYear || month < 1 || month > 12) {
      setDateError(true);
      return false;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      setDateError(true);
      return false;
    }

    setDateError(false);
    return true;
  };

  const validateDigimon = () => {
    const trimmedName = digimonName.trim();
    const isValid = (
      trimmedName.length >= 3 &&
      trimmedName.toLowerCase().endsWith('mon') &&
      /^[a-zA-Z]+$/.test(trimmedName)
    );
    
    setDigimonError(!isValid);
    return isValid;
  };

  const handleSubmit = () => {
    const isNameValid = validateTextInput(fullName, 'Nome');
    const isCityValid = validateTextInput(city, 'Cidade');
    const isDateValid = validateBirthDate();
    const isDigimonValid = validateDigimon();

    if (isNameValid && isCityValid && isDateValid && isDigimonValid) {
      ToastAndroid.show('Cadastro realizado com sucesso!', ToastAndroid.LONG);
      // Limpar formulário se necessário
    }
  };

  return (
    <View style={styles.container}>
      {/* Nome Completo */}
      <Text>Nome completo</Text>
      <TextInput 
        style={[styles.imputer, nameError && styles.errorInput]}
        placeholder="ex. João da Silva"
        value={fullName}
        onChangeText={(text) => {
          setFullName(text);
          setNameError(false);
        }}
      />
      
      {/* Data de Nascimento */}
      <Text>Data de nascimento</Text>
      <TextInput 
        style={[styles.imputer, dateError && styles.errorInput]}
        placeholder="ex. 01/01/2000"
        value={birthDate}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />
      
      {/* Cidade */}
      <Text>Cidade de onde mora</Text>
      <TextInput 
        style={[styles.imputer, cityError && styles.errorInput]}
        placeholder="ex. Rio de Janeiro"
        value={city}
        onChangeText={(text) => {
          setCity(text);
          setCityError(false);
        }}
      />
      
      {/* Digimon */}
      <Text>Parceiro digimon</Text>
      <TextInput 
        style={[styles.imputer, digimonError && styles.errorInput]}
        value={digimonName}
        onChangeText={(text) => {
          setDigimonName(text);
          setDigimonError(false);
        }}
        placeholder="ex. Agumon"
        autoCapitalize="none"
      />

      <Text 
        style={styles.buttonStyle} 
        onPress={handleSubmit}
      >
        Enviar
      </Text>
    </View>
  );
}