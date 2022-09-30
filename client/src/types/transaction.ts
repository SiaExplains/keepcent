import { CategoryType } from './category';

type Transaction = {
  id: number;
  text: string;
  amount: number;
  category: number;
  transactionType: CategoryType;
};

export type { Transaction };
