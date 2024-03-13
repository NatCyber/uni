import { useState } from 'react';
import { IconType } from 'react-icons';
import { MdSpaceDashboard } from 'react-icons/md';

const SideNav = () => {
  type MenuItem = {
    id: number;
    name: string;
    icon: React.ReactNode;
    route?: string;
    subMenu?: MenuItem[];
  };

  const MenuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Menu 1',
      icon: <MdSpaceDashboard />,
      route: '/menu',
    },
    {
      id: 2,
      name: 'Menu 2',
      icon: <MdSpaceDashboard />,
      subMenu: [
        {
          id: 1,
          name: 'Menu 2.1',
          icon: <MdSpaceDashboard />,
          route: '/menu2.1',
        },
        {
          id: 2,
          name: 'Menu 2.2',
          icon: <MdSpaceDashboard />,
          route: '/menu2.2',
        },
      ],
    },
  ];

  const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setOpenSubMenuId(openSubMenuId === id ? null : id);
  };

  return (
    <aside className="bg-gray-800 text-white w-64 h-screen">
      <h1 className="p-4"> Sidebar</h1>
      <div>
        {MenuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                if (item.subMenu) {
                  toggleSubMenu(item.id);
                } else {
                  // Navigate to the route (use react-router, for example)
                }
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-200"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </button>
            {item.subMenu && openSubMenuId === item.id && (
              <div>
                {item.subMenu.map((subItem) => (
                  <div key={subItem.id} className="pl-6">
                    <button
                      onClick={() => {
                        // Navigate to the route (use react-router, for example)
                      }}
                      className="flex items-center py-2 pl-2 hover:bg-gray-200"
                    >
                      {subItem.icon}
                      <span className="ml-2">{subItem.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};
export default SideNav;
