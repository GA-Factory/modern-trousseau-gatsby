import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
`;
