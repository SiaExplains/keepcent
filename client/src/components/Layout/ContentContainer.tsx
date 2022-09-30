import { ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
};
const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className="et-content-container">{children}</div>;
};

export default ContentContainer;
