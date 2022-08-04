import { AddTransaction } from '../components/AddTransaction';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';

const OverviewPage = () => {
  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <TransactionList />
    </div>
  );
};

export default OverviewPage;
