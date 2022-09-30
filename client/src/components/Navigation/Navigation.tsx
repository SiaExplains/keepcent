import { BrowserView, MobileOnlyView } from 'react-device-detect';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  return (
    <>
      <BrowserView>
        <DesktopNavigation />
      </BrowserView>
      <MobileOnlyView>
        <MobileNavigation />
      </MobileOnlyView>
    </>
  );
};

export default Navigation;
