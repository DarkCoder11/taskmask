import React from 'react';
import { useResponsive } from '../../utils';
import { MobileHeader, DesktopHeader } from '../../components';

const HomeContainer = () => {
  const content = useResponsive([<MobileHeader />, <DesktopHeader />], {
    mobile: 576,
    desktop: 992
  });

  return (
    <div className="container d-flex justify-content-center">
      <div className="container d-flex justify-content-center border border-primary">
        {content}
      </div>
    </div>
  );
};

export default HomeContainer;
