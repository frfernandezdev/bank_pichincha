import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TextInputProps} from 'react-native';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

export type DatePickerProps = Omit<TextInputProps, 'inputMode'> &
  UseControllerProps & {
    label?: string;
    error?: boolean;
    defaultValue?: string;
    helperText?: string;
  };

export function ControlledDatePicker(props: DatePickerProps) {
  const [show, setShow] = useState(false);
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

  field.value = new Date(field.value);

  const handleChange = (event: DateTimePickerEvent, date?: Date) => {
    field.onChange(date);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      {label && renderLabel()}
      <TextInput
        {...inputProps}
        inputMode="none"
        onPressIn={() => setShow(true)}
        value={field.value.toLocaleDateString()}
        style={textInputStyle}
      />
      {show && (
        <DateTimePicker
          value={field.value}
          mode="date"
          is24Hour={true}
          onChange={handleChange}
        />
      )}
      <View style={styles.helperTextContainer}>
        <Text style={styles.helperText}>{error ? helperText : ''}</Text>
      </View>
    </View>
  );
}

export default function DatePicker(props: DatePickerProps) {
  const {name} = props;

  const formContext = useFormContext();

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextField must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }

  return <ControlledDatePicker {...props} />;
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
