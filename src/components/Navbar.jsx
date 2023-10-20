import styled from "styled-components";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 18px;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  border: none;
  background-color: transparent;
  outline: none;
  width: 90%;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = ({ darkMode }) => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon style={{ color: darkMode ? "white" : "black" }} />
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
