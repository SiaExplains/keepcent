// we want to use that information both server- and client-side so we stick with js
import type { ReactElement } from 'react';
import type { UrlObject } from 'url';
import OriginalNextLink from 'next/link';
import nextRoutes from 'next/router';
import { createElement } from 'react';

import type { NextLink, NextLinkProps, RouterType, Routes, RoutesCreatorFn } from '../src/types/next-routes';
// import { createDefaultRequestContext } from '../src/common/requestContext';
// import { encodeURIComponentSafe } from '../src/common/safeDecoder';

import {
  ROUTE_PATH,
  RouteName,
} from './route-constants';

// fix wrong `next-routes` type definition: exported type is Routes class, not creator function
const createRoutes: RoutesCreatorFn = nextRoutes as any;

type StringByLocaleMap = { [locale: string]: string };

// const handleNonAsciiChars = (path: string): string => {
//   const encodedPath: string = encodeURIComponentSafe(path);
//   return encodedPath === path ? path : `${path}|${encodedPath}`;
// };

// const asPattern = (slugs: StringByLocaleMap): string =>
//   Object.values(slugs).map(handleNonAsciiChars).join('|');

// wrapper Link component to fix error "Cannot destructure property 'auth' of 'urlObj' as it is undefined"
const PatchedLink: NextLink = (propsOriginal: NextLinkProps): ReactElement => {
  let href: string | UrlObject | undefined = propsOriginal.href;

  if (typeof href !== 'string') {
    // show debug info with last request to detect causing request
    // will be removed/deactivated in future after detecting causing request
    // if (!href) {
    //   console.debug('Link without href', propsOriginal, '\n', createDefaultRequestContext());
    // }

    // ensure href object exists - fix later destructuring error on undefined "href" property
    href = href ?? {};
  }

  return createElement(OriginalNextLink, { ...propsOriginal, href }, propsOriginal.children);
};

const routes: Routes = createRoutes({ Link: PatchedLink });

routes
  .add({ name: RouteName.HOME, pattern: ROUTE_PATH.HOME, page: 'index' })
  .add({ name: RouteName.CATEGORY, pattern: ROUTE_PATH.CATEGORY, page: 'index' })


const Link: NextLink = routes.Link;
const Router: RouterType = routes.Router;

export type { RouterType };

export { Link, Router, routes };

