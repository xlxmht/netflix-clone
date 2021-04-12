import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 8px;
  font-size: 1.625rem;
  max-width: 670px;
`;
export const Frame = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 400;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  user-select: none;
  align-items: center;
`;
export const Body = styled.div`
  padding: 1.2em;
  background: #303030;
  font-weight: 300;
`;