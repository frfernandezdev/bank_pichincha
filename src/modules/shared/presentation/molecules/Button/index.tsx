import React, {ReactNode} from 'react';
import {
  StyleSheet,
  StyleProp,
  Pressable,
  View,
  Text,
  ViewStyle,
  TextStyle,
  PressableProps,
  ViewProps,
} from 'react-native';

type ButtonProps = PressableProps & {
  color?: 'default' | 'primary' | 'danger';
  style?: StyleProp<ViewStyle & TextStyle>;
  children: ReactNode;
};

export default function Button(props: ButtonProps) {
  const {children, color} = props;
  const _styles = StyleSheet.flatten([
    styles.button,
    props.style,
    styleColors[color ?? 'default'],
  ]);

  return (
    <View style={_styles as StyleProp<ViewProps>}>
      <Pressable {...props}>
        <Text style={_styles as StyleProp<TextStyle>}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  backgroundColor: {},
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
    backgroundColor: '#e9ecf3',
  },
});
