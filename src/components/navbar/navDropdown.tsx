import DropdownContainer from "../../containers/dropdownContainer";
import NavLinks from "./navLinks";

type Data = {
  links: {
    link: string;
    name: string;
  }[];
  open: boolean;
};

const NavDropdown = ({ links, open }: Data): JSX.Element => {
  return (
    <DropdownContainer open={open}>
      <NavLinks links={links} />
    </DropdownContainer>
  );
};

export default NavDropdown;
