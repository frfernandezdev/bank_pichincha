import type {Router} from '../../../shared/infrastructure/router';
import CreateFinancialProductPage from '../../presentation/pages/Create';
import DetailFinancialProductPage from '../../presentation/pages/Detail';
import EditFinancialProductPage from '../../presentation/pages/Edit';
import ListFinancialProductPage from '../../presentation/pages/List';

export type ScreenNames = [
  'financial-product/list',
  'financial-product/create',
  'financial-product/edit',
  'financial-product/detail',
];

const router: Router<ScreenNames[number]>[] = [
  {
    name: 'financial-product/list',
    component: ListFinancialProductPage,
  },
  {
    name: 'financial-product/create',
    component: CreateFinancialProductPage,
  },
  {
    name: 'financial-product/edit',
    component: EditFinancialProductPage,
  },
  {
    name: 'financial-product/detail',
    component: DetailFinancialProductPage,
  },
];

export default router;
