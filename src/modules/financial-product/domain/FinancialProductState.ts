export interface FinancialProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  data_release: Date;
  data_revision: Date;
}

export interface FinancialProductState {
  entity: FinancialProduct | null;
  entities: FinancialProduct[];
}

export const initialFinancialProductState: FinancialProductState = {
  entity: null,
  entities: [],
};
