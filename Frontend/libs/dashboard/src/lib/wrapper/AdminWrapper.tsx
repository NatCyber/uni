import Header from './Header';
import SideNav from './Sidenav';

const AdminWrapper = ({ children }) => {
  const MainContent: React.FC = () => {
    return (
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
        {children}
      </main>
    );
  };
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default AdminWrapper;
