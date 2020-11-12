import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;