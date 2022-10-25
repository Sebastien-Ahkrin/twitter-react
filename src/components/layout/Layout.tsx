import { ReactNode } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className="site-content">{children}</div>
      <Sidebar />
    </>
  );
}
