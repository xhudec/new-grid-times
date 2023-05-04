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
          <LeftActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </LeftActionGroup>
          <MainHeader>
            <Logo />
          </MainHeader>
          <RightActionGroup>
            <RightActionGroupMobileContent>
              <button>
                <User size={24} />
              </button>
            </RightActionGroupMobileContent>
            <RightActionGroupDesktopContent>
              <Button>Subscribe</Button>
              <SubscriberLink href="#">Already a subscriber?</SubscriberLink>
            </RightActionGroupDesktopContent>
          </RightActionGroup>
        </Row>
      </SuperHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  @media ${QUERIES.laptopAndUp} {
    padding: 16px 0 0;
    margin-bottom: 80px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  padding: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;

  grid-template-areas:
    "left-group right-group"
    "main-header main-header";

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: min-content auto min-content;
    grid-template-rows: auto;
    justify-content: space-between;

    grid-template-areas: "left-group main-header right-group";
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;

  color: var(--color-gray-100);
  background-color: var(--color-gray-900);

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 32px;
    color: inherit;
    background-color: transparent;
  }
`;

const LeftActionGroup = styled(ActionGroup)`
  flex: 1;
  grid-area: left-group;
`;

const MainHeader = styled(MaxWidthWrapper)`
  margin-top: 32px;
  margin-bottom: 48px;

  grid-area: main-header;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const RightActionGroup = styled(ActionGroup)`
  grid-area: right-group;
  justify-content: flex-end;
`;

const RightActionGroupMobileContent = styled.div`
  display: block;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const RightActionGroupDesktopContent = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
    gap: 8px;
  }
`;

const SubscriberLink = styled.a`
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
  font-weight: var(--font-weight-normal);
`;

export default Header;
