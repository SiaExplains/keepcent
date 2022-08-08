import { clearStateInLocalstorage } from '../common/localstorageHelper';

const SettingsPage = () => {
  return (
    <div>
      <span>Setting</span>
      <br />
      <div>We will complete this page soon!</div>
      <button onClick={() => clearStateInLocalstorage()}>
        Reset All existing data. (REFRESH Afterward)
      </button>
    </div>
  );
};

export default SettingsPage;
