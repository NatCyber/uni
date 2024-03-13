import { AdminWrapper, HeaderBar, SideBar } from '@egst.frontend/dashboard';
import { Header, SideNav } from '@egst.frontend/dashboard';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <SideBar>
        <HeaderBar />
        <Outlet />
      </SideBar>

      {/* <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="overflow-y-auto p-4 h-screen">
            <Outlet />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MainLayout;
