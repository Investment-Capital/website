type Sidebar =
  | undefined
  | {
      category: string;
      label: string;
      icon: React.ReactNode;
      link?: string;
    };

type Route = {
  element: React.ReactNode;
  path: string;

  sidebar?: Sidebar;
};

export default Route;
