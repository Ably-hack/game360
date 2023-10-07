import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <main className='container'>{children}</main>;
};

export default DashboardLayout;
