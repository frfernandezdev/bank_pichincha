import {StackNavigationOptions} from '@react-navigation/stack';
import type {ComponentType} from 'react';

export type Router<T> = {
  name: T;
  component: ComponentType;
  options?: StackNavigationOptions;
};
