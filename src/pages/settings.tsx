import { clearStateInLocalstorage } from '../common/localstorageHelper';

const SettingsPage = () => {
  return (
    <div className="container">
      <span>Setting</span>
      <br />
      <div>We will complete this page soon!</div>
      <button className="btn " onClick={() => clearStateInLocalstorage()}>
        Reset All existing data. (REFRESH Afterward)
      </button>
    </div>
  );
};

export default SettingsPage;
