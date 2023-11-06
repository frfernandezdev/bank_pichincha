import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {HeaderTitleProps} from '@react-navigation/elements';
import type {Router} from './modules/shared/infrastructure/router';
import coreRouter, {
  ScreenNames as CoreScreenNames,
} from './modules/core/infrastructure/router';
import financialProductRouter, {
  ScreenNames as FinancialProductScreenNames,
} from './modules/financial-product/infrastructure/router';
import LogoHeader from './modules/financial-product/presentation/molecules/LogoHeader';
import {NavigationProp} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

type ScreenNames = [...CoreScreenNames, ...FinancialProductScreenNames];
type RootStackParamList = Record<ScreenNames[number], undefined | null | any>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export type StackRoute = RouteProp<RootStackParamList>;

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const routes: Router<ScreenNames[number]>[] = [
  ...coreRouter,
  ...financialProductRouter,
];

export default function Router() {
  const renderTitle = (props: HeaderTitleProps) => <LogoHeader {...props} />;

  const renderScreen = (
    {name, component}: Router<ScreenNames[number]>,
    index: number,
  ) => <Screen key={index} name={name} component={component} />;

  return (
    <Navigator
      initialRouteName="financial-product/list"
      screenOptions={{
        headerTitle: renderTitle,
        headerTitleAlign: 'center',
        headerStyle: {
          borderWidth: 1,
          borderColor: '#e2e2e2',
        },
        cardShadowEnabled: true,
        cardOverlayEnabled: true,
      }}>
      {routes.map(renderScreen)}
    </Navigator>
  );
}
