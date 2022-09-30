import { AddTransaction } from "../src/components/AddTransaction";
import { Balance } from "../src/components/Balance";
import { IncomeExpenses } from "../src/components/IncomeExpenses";
import Layout from "../src/components/Layout/Layout";
import { TransactionList } from "../src/components/TransactionList";

const OverviewPage = () => {
  return (
    <Layout>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
      </div>
    </Layout>
  );
};

export default OverviewPage;
