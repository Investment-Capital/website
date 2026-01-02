import { LucideIcon } from "lucide-react";

type Navigation =
  | undefined
  | {
      category: string;
      label: string;
      icon: LucideIcon;
      link?: string;
    };

type Route = {
  element: () => React.ReactNode;
  path: string;

  navigation?: Navigation;
};

export default Route;
