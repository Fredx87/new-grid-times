import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopOnlyWrapper>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopOnlyWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopUserAction>
          <Button>Subscribe</Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </DesktopUserAction>
      </MainHeader>
    </header>
  );
};

const DesktopOnlyWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 2;
`;

const DesktopUserAction = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: end;
    align-self: end;
    gap: 8px;
  }
`;

const LoginLink = styled.a`
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
