import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  label: string;
};

const CustomCheckbox: React.FC<Props> = ({ value, onValueChange, label }) => {
  return (
    <Pressable onPress={() => onValueChange(!value)} style={styles.container}>
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#4630EB',
    borderColor: '#4630EB',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
