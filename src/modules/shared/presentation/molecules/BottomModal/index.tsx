import React from 'react';
import Modal, {ModalProps} from 'react-native-modal';
import {StyleSheet, View} from 'react-native';

export type BottomModalProps = Partial<
  Pick<
    ModalProps,
    'isVisible' | 'onBackdropPress' | 'onSwipeComplete' | 'style' | 'children'
  >
> & {};

export default function BottomModal({
  isVisible,
  onBackdropPress,
  onSwipeComplete,
  style,
  children,
}: BottomModalProps) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onSwipeComplete={onSwipeComplete}
      swipeDirection="down"
      backdropOpacity={0.4}
      style={styles.modal}>
      <View style={StyleSheet.flatten([styles.container, style])}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {justifyContent: 'flex-end', margin: 0},
  container: {
    backgroundColor: 'white',
  },
});
