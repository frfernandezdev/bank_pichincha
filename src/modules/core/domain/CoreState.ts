export interface CoreState {
  loader: boolean;
  theme: 'dark' | 'light';
  snackbar: {
    open: boolean;
    message?: string | null;
    severity?: string | null;
  };
}

export const initialCoreState: CoreState = {
  loader: true,
  theme: 'light',
  snackbar: {
    open: false,
    message: null,
    severity: 'info',
  },
};
