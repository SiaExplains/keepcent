export enum CategoryType {
  Income = 1,
  OutCome = 2
}
type Category = {
  id: number;
  title: string;
  description: string;
  categoryType: CategoryType;
};

export type { Category };
