import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import BottomModal, {BottomModalProps} from '../../molecules/BottomModal';
import Button from '../../molecules/Button';
import IconButton from '../../molecules/IconButton';

export type ModalDeleteProps = Pick<BottomModalProps, 'isVisible'> & {
  title: string;
  onConfirm?: () => void;
  onClose?: () => void;
};

export default function ModalDelete({
  title,
  isVisible,
  onConfirm,
  onClose,
}: ModalDeleteProps) {
  return (
    <BottomModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      style={styles.container}>
      <View style={styles.header}>
        <IconButton name="close" size={16} onPress={onClose} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.scrollContainerText}>{title}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerButtons}>
          <Button color="primary" onPress={onConfirm}>
            Confirmar
          </Button>
        </View>
        <Button onPress={onClose}>Cancelar</Button>
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  scrollContainer: {
    paddingVertical: 26,
    paddingHorizontal: 30,
  },
  scrollContainerText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButtons: {
    marginBottom: 10,
  },
});
