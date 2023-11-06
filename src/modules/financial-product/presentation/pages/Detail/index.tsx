import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, View, Image} from 'react-native';
import {StackNavigation, StackRoute} from '../../../../../router';

import TemplateFinancialProduct from '../../templates/TemplateFinancialProduct';
import Button from '../../../../shared/presentation/molecules/Button';
import ModalDelete from '../../../../shared/presentation/organisms/ModalDelete';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../../../store';
import {FinancialProduct} from '../../../domain/FinancialProductState';
import {
  fetchAllFinancialProducts,
  fetchDeleteFinancialProducts,
  fetchOneFinancialProducts,
} from '../../../infrastructure/redux/reducers';

export default function DetailFinancialProductPage() {
  const {navigate} = useNavigation<StackNavigation>();
  const {params} = useRoute<StackRoute>();
  const entity = useSelector<RootState, FinancialProduct | null>(
    ({financialProduct}) => financialProduct.entity,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOneFinancialProducts(params?.id));
  }, [dispatch, params]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleConfirm = () => {
    dispatch(fetchDeleteFinancialProducts(params?.id));
    dispatch(fetchAllFinancialProducts());
    navigate('financial-product/list');
  };

  return (
    <TemplateFinancialProduct>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ID: {params?.id}</Text>
          <Text style={styles.headerSubTitle}>Información extra</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentRow}>
            <Text style={styles.contentPropertyName}>Nombre:</Text>
            <Text style={styles.contentPropertyValue}>{entity?.name}</Text>
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.contentPropertyName}>Descripción:</Text>
            <Text style={styles.contentPropertyValue}>
              {entity?.description}
            </Text>
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.contentPropertyName}>Logo:</Text>
            <View style={styles.contentPropertyValueLogo}>
              <Image
                style={styles.contentPropertyValueLogoImage}
                source={{
                  uri: entity?.logo,
                }}
              />
            </View>
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.contentPropertyName}>Fecha liberación:</Text>
            <Text style={styles.contentPropertyValue}>
              {entity?.data_release
                ? new Date(entity?.data_release).toLocaleDateString()
                : ''}
            </Text>
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.contentPropertyName}>Fecha revisión:</Text>
            <Text style={styles.contentPropertyValue}>
              {entity?.data_revision
                ? new Date(entity?.data_revision).toLocaleDateString()
                : ''}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerButtons}>
            <Button
              onPress={() =>
                navigate('financial-product/edit', {id: params?.id})
              }>
              Editar
            </Button>
          </View>
          <Button color="danger" onPress={handleModal}>
            Eliminar
          </Button>
        </View>
      </View>
      <ModalDelete
        isVisible={isModalVisible}
        onConfirm={handleConfirm}
        onClose={() => setIsModalVisible(false)}
        title="¿Estás seguro de eliminar el producto Tarjeta de Credito?"
      />
    </TemplateFinancialProduct>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  header: {
    marginBottom: 46,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  headerSubTitle: {
    fontSize: 14,
    color: '#656565',
  },
  content: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  contentPropertyName: {
    fontSize: 14,
    color: '#656565',
  },
  contentPropertyValue: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    textAlign: 'right',
    paddingLeft: 60,
  },
  contentPropertyValueLogo: {},
  contentPropertyValueLogoImage: {
    resizeMode: 'contain',
    width: 250,
    height: 125,
  },
  footer: {
    flexDirection: 'column',
  },
  footerButtons: {
    marginBottom: 10,
  },
});
