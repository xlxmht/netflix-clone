import React, { useState, createContext, useContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body
} from './styles/accordion';
// import PlusIcon from '/images/icons/plus.svg';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const {setToggleShow} = useContext(ToggleContext);
  return (
    <Header {...restProps} onClick={() => setToggleShow(prev => !prev)}>
      {children}
      {/* <img src="/images/icons/plus.svg" alt="Open" /> */}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const {toggleShow} = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
