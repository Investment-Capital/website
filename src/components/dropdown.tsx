import DropdownContainer from "../containers/dropdownContainer";
import NavLink from "./navbar/navLink";

type Data = {
  links: {
    link: string;
    name: string;
  }[];
  open: boolean;
};

const Dropdown = ({ links, open }: Data) => {
  return (
    <DropdownContainer open={open}>
      {links.map((link, index) => (
        <NavLink key={index} name={link.name} link={link.link} />
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
