import React, {ReactNode} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

export type TemplateFinancialProduct = {
  children: ReactNode;
};

export default function TemplateFinancialProduct({
  children,
}: TemplateFinancialProduct) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
