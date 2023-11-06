import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type SearchFieldProps = TextInputProps & {};

export default function SearchField(props: SearchFieldProps) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
    color: 'black',
    fontWeight: '300',
    backgroundColor: 'white',
  },
});
