import styled from 'styled-components';
import getColor from '../../../utils/getColor';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${(props) => getColor(props.numTotalPosts)};
  color: #fff;
  line-height: 9px;
  font-size: 14px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.grayDark1};
  }

  ${(props) => (props.focused ? `border:1px solid ${props.theme.colors.grayDark1}` : '')};
`;
