import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchField from '../../../../shared/presentation/organisms/SearchField';
import Button from '../../../../shared/presentation/molecules/Button';
import List from '../../organisms/List';
import {StackNavigation} from '../../../../../router';
import TemplateFinancialProduct from '../../templates/TemplateFinancialProduct';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllFinancialProducts} from '../../../infrastructure/redux/reducers';
import {AppDispatch, RootState} from '../../../../../store';
import {FinancialProduct} from '../../../domain/FinancialProductState';

export default function ListFinancialProductPage() {
  const entities = useSelector<RootState, FinancialProduct[]>(
    ({financialProduct}) => financialProduct.entities,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<StackNavigation>();
  const renderHeaderComponent = () => <SearchField placeholder="Search..." />;

  useEffect(() => {
    dispatch(fetchAllFinancialProducts());
  }, [dispatch]);

  const renderFooterComponent = () => (
    <Button
      color="primary"
      onPress={() => navigation.navigate('financial-product/create')}>
      Agregar
    </Button>
  );

  return (
    <TemplateFinancialProduct>
      <List
        data={entities}
        headerComponent={renderHeaderComponent()}
        footerComponent={renderFooterComponent()}
      />
    </TemplateFinancialProduct>
  );
}
