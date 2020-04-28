/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import BookApptProvider from './src/global/ContextProvider';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = BookApptProvider;
