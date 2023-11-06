import React from 'react';
import {
  StyleSheet,
  StyleProp,
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  PressableProps,
  ViewProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconButtonProps = Omit<PressableProps, 'children'> & {
  color?: 'default' | 'primary' | 'danger';
  name: string;
  size?: number;
  style?: StyleProp<ViewStyle & TextStyle>;
};

export default function IconButton(props: IconButtonProps) {
  const {color, name, size} = props;
  const _styles = StyleSheet.flatten([
    styles.button,
    props.style,
    styleColors[color ?? 'default'],
  ]);

  return (
    <View style={_styles as StyleProp<ViewProps>}>
      <Pressable {...props}>
        <Icon {...{name, size}} color={styleColors[color ?? 'default'].color} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styleColors = StyleSheet.create({
  primary: {
    color: 'black',
    backgroundColor: '#ffdd3b',
  },
  danger: {
    color: 'white',
    backgroundColor: '#d41015',
  },
  default: {
    color: 'black',
    backgroundColor: 'transparent',
  },
});
