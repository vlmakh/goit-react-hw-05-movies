import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import { Switch } from 'theme-ui';

// export const StyledSwitch = styled(Switch)`
//   background-color: ${p => p.theme.colors.textPrimary};  
// `;

export const Layout = styled.div`
  min-width: calc(100vw - 24px);
  min-height: 100vh;
  padding-top: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bcgMain};

  transition: background-color 250ms linear;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  background: ${p => p.theme.colors.bcgHeader};
  z-index: 100;
  box-shadow: ${p => p.theme.shadows.headerShadow};

  transition: background-color 250ms linear;
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;

  transition: color 250ms linear;

   &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  gap: ${p => p.theme.space[4]}px;
`;

export const LangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
  color: ${p => p.theme.colors.textPrimary};

  transition: color 250ms linear;

  :disabled {
    color: ${p => p.theme.colors.accent};
  }


  :hover:not(:disabled) {
    color: ${p => p.theme.colors.accent};
  }
`
