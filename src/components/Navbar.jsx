import styled from "styled-components";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const NavbarContainer = styled.div``;

const NavbarWrapper = styled.div``;

const Search = styled.div``;

const Input = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Search>
          <Input placeholder="Search" />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
