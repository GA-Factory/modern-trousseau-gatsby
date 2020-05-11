/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import BookApptProvider from './src/global/ContextProvider';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = BookApptProvider;
