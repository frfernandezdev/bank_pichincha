import React from 'react';
import {Image, StyleSheet} from 'react-native';
import type {HeaderTitleProps} from '@react-navigation/elements';

type LogoHeaderProps = HeaderTitleProps & {};

export default function LogoHeader(_: LogoHeaderProps) {
  return (
    <Image
      style={styles.image}
      source={require('../../../../../../assets/logo.png')}
    />
  );
}

const styles = StyleSheet.create({
  image: {resizeMode: 'contain', width: 250, height: 28},
});
