import React from 'react';
import {StyleSheet, View, Text, TextInput, TextInputProps} from 'react-native';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';

export type TextFieldProps = TextInputProps &
  UseControllerProps & {
    label?: string;
    error?: boolean;
    defaultValue?: string;
    helperText?: string;
  };

export function ControlledTextField(props: TextFieldProps) {
  const {name, label, helperText, rules, error, defaultValue, ...inputProps} =
    props;

  const {field} = useController({name, rules, defaultValue});

  const renderLabel = () => (
    <View style={styles.labelContaner}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  const textInputStyle = StyleSheet.flatten([
    styles.input,
    inputProps.style,
    error ? styles.inputError : {},
  ]);

  if (field.value instanceof Date) {
    field.value = field.value.toLocaleDateString();
  }

  return (
    <View style={styles.container}>
      {label && renderLabel()}
      <TextInput
        {...inputProps}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        style={textInputStyle}
      />
      <View style={styles.helperTextContainer}>
        <Text style={styles.helperText}>{error ? helperText : ''}</Text>
      </View>
    </View>
  );
}

export default function TextField(props: TextFieldProps) {
  const {name} = props;

  const formContext = useFormContext();

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextField must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }

  return <ControlledTextField {...props} />;
}

const styles = StyleSheet.create({
  container: {marginBottom: 8},
  labelContaner: {
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
    color: 'black',
    fontWeight: '300',
  },
  inputError: {
    borderColor: 'red',
  },
  helperTextContainer: {
    marginTop: 4,
  },
  helperText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'red',
  },
});
