import useWindowSize from './useWindowSize';

const useResponsive = (content, breakpoints = {}) => {
  const { width } = useWindowSize();
  const [mobileContent, ...restContent] = content;
  const { mobile = 767, tablet = 768, desktop = 992 } = breakpoints;

  const isMobile = width <= mobile;
  const isDesktop = width >= desktop;
  const isTablet = width <= tablet;

  const getScreenContent = () => {
    if (isMobile) {
      return mobileContent;
    } else if (isTablet && content.length > 2) {
      return restContent[0];
    } else if (isDesktop && content.length > 2) {
      return restContent[1];
    } else {
      return restContent[restContent.length - 1];
    }
  };

  return getScreenContent();
};

export default useResponsive;
