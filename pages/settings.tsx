import { clearStateInLocalstorage } from '../src/common/localstorageHelper';
import Layout from '../src/components/Layout/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <div className="container">
        <span>Setting</span>
        <br />
        <div>We will complete this page soon!</div>
        <button className="btn " onClick={() => clearStateInLocalstorage()}>
          Reset All existing data. (REFRESH Afterward)
        </button>
      </div>
    </Layout>
  );
};

export default SettingsPage;
