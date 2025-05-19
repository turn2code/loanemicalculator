import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { calculateEMI } from '../utils/calculateemi';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const handleCalculate = () => {
    if (principal && rate && tenure) {
      const result = calculateEMI(parseFloat(principal), parseFloat(rate), parseFloat(tenure));
      setEmi(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan EMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Principal Amount"
        keyboardType="numeric"
        value={principal}
        onChangeText={setPrincipal}
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Interest Rate (%)"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Tenure (Years)"
        keyboardType="numeric"
        value={tenure}
        onChangeText={setTenure}
      />

      <Button title="Calculate EMI" onPress={handleCalculate} />

      {emi && (
        <Text style={styles.result}>Your Monthly EMI: ₹{emi}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 15,
  },
  result: { marginTop: 20, fontSize: 18, color: 'green' },
});

export default EMICalculator;
