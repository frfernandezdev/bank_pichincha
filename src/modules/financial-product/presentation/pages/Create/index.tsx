import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TemplateFinancialProduct from '../../templates/TemplateFinancialProduct';
import Button from '../../../../shared/presentation/molecules/Button';
import TextField from '../../../../shared/presentation/molecules/TextField';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string, date} from 'yup';
import DatePicker from '../../../../shared/presentation/molecules/DatePicker';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../../../store';
import {
  fetchAllFinancialProducts,
  fetchPostFinancialProducts,
} from '../../../infrastructure/redux/reducers';

type FormValues = {
  id: string;
  name: string;
  description: string;
  logo: string;
  data_release: Date;
  data_revision: Date;
};

const schema = object()
  .shape({
    id: string()
      .max(10, 'Requerido maximo 10 caracteres')
      .min(3, 'Requerido minimo 3 caracteres')
      .required(),
    name: string()
      .min(5, 'Requerido minimo 5 caracteres')
      .max(100, 'Requerido maximo 10 caracteres')
      .required(),
    description: string()
      .min(10, 'Requerido minimo 10 caracteres')
      .max(200, 'Requerido maximo 200 caracteres')
      .required(),
    logo: string().required(),
    data_release: date()
      .min(new Date(), 'Requerido la fecha debe ser igual o mayor a la actual')
      .required(),
    data_revision: date()
      .min(
        new Date(),
        'Requerido la fecha debe ser exactamente un año posterior a la fecha de liberación',
      )
      .required(),
  })
  .required();

export default function CreateFinancialProductPage() {
  const dispatch = useDispatch<AppDispatch>();
  const today = new Date();
  const {...methods} = useForm<FormValues>({
    defaultValues: {
      data_release: today,
      data_revision: new Date(new Date().setFullYear(today.getFullYear() + 1)),
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    reset,
    formState: {errors},
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(fetchPostFinancialProducts(data));
    dispatch(fetchAllFinancialProducts());
    reset();
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, _) => {
    return console.log(errors);
  };

  return (
    <TemplateFinancialProduct>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Formulario de Registro</Text>
        </View>
        <View style={styles.formContent}>
          <FormProvider {...methods}>
            <TextField
              name="id"
              label="ID"
              inputMode="text"
              rules={{required: 'Id no valido'}}
              error={!!errors.id}
              helperText={errors.id ? errors.id.message : ''}
            />
            <TextField
              name="name"
              label="Nombre"
              inputMode="text"
              placeholder="Tarjeta Crédito"
              rules={{required: 'Este campo es requerido!'}}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
            <TextField
              name="description"
              label="Descripción"
              inputMode="text"
              rules={{required: 'Este campo es requerido!'}}
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ''}
            />
            <TextField
              name="logo"
              label="Logo"
              inputMode="url"
              rules={{required: 'Este campo es requerido!'}}
              error={!!errors.logo}
              helperText={errors.logo ? errors.logo.message : ''}
            />
            <DatePicker
              name="data_release"
              label="Fecha Liberación"
              rules={{required: 'Este campo es requerido!'}}
              error={!!errors.data_release}
              helperText={
                errors.data_release ? errors.data_release.message : ''
              }
            />
            <DatePicker
              name="data_revision"
              label="Fecha Revisión"
              rules={{required: 'Este campo es requerido!'}}
              error={!!errors.data_revision}
              helperText={
                errors.data_revision ? errors.data_revision.message : ''
              }
            />
          </FormProvider>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerButtons}>
            <Button color="primary" onPress={handleSubmit(onSubmit, onError)}>
              Enviar
            </Button>
          </View>
          <Button onPress={() => reset()}>Reiniciar</Button>
        </View>
      </ScrollView>
    </TemplateFinancialProduct>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  formContent: {},
  footer: {},
  footerButtons: {
    marginBottom: 10,
  },
});
