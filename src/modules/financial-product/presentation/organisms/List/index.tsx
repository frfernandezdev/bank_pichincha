import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {StyleSheet, FlatList, View, ListRenderItemInfo} from 'react-native';
import {StackNavigation} from '../../../../../router';
import {FinancialProduct} from '../../../domain/FinancialProductState';
import ItemList from '../../molecules/ItemList';

export type ListProps = {
  data: FinancialProduct[];
  headerComponent?: ReactElement;
  footerComponent?: ReactElement;
};

export default function List({
  data,
  headerComponent,
  footerComponent,
}: ListProps) {
  const {navigate} = useNavigation<StackNavigation>();

  const handlerOnPress = (id: string) => () => {
    navigate('financial-product/detail', {id});
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<{id: string; name: string}>) => (
    <ItemList
      id={item.id}
      title={item.name}
      onPress={handlerOnPress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>{headerComponent}</View>
      <View style={styles.wrapper}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatListContainer}
        />
      </View>
      <View style={styles.wrapperFooter}>{footerComponent}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexGrow: 1,
  },
  flatListContainer: {},
  wrapperHeader: {},
  wrapperFooter: {
    paddingVertical: 10,
  },
});
