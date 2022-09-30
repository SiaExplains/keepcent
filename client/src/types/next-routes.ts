// fixed types of module `next-routes` (contains only used subset of types)
// module contains own type definitions - but they don't match to its implementation
import type NextRouter from 'next/dist/shared/lib/router/router';
import type NextServer from 'next/dist/server/next-server';
import type { ComponentType, ReactNode } from 'react';
import type { IncomingMessage, ServerResponse } from 'http';
import type { LinkProps } from 'next/link';
import type { Request, Response } from 'express';
import type { UrlObject } from 'url';

type Route = {
  page: string;
  name: string;
};

type Query = { [name: string]: string | string[] };

type CustomRouteHandlerParams = {
  req: IncomingMessage;
  res: ServerResponse;
  route: Route;
  query: Query;
};

type CustomRouteHandler = (params: CustomRouteHandlerParams) => void;

type HTTPHandler = (req: Request, res: Response) => void;

type Url = string | UrlObject;

type NextLinkProps = Partial<LinkProps> & {
  children?: ReactNode;
  route?: string;
  params?: { [name: string]: any };
  to?: string;
};

type NextLink = ComponentType<NextLinkProps>;
type RouteParams = { [name: string]: string | number };
type RouteOptions = { [name: string]: string | number };

type RouterType = NextRouter & {
  pushRoute(route: string, params?: RouteParams, options?: RouteOptions): Promise<boolean>;
  replaceRoute(route: string, params?: RouteParams, options?: RouteOptions): Promise<boolean>;
  prefetchRoute(route: string, params?: RouteParams, options?: RouteOptions): Promise<void>;
};

interface Routes {
  add(name: string, pattern?: string, page?: string): this;
  add(options: { name: string; pattern?: string; page?: string }): this;
  add(pattern: string, page: string): this;
  getRequestHandler(app: NextServer, customHandler?: CustomRouteHandler): HTTPHandler;
  Link: NextLink;
  Router: RouterType;
}

type RoutesCreatorOptions = {
  Link?: NextLink;
  Router?: NextRouter;
};

type RoutesCreatorFn = (options?: RoutesCreatorOptions) => Routes;

export type {
  CustomRouteHandler,
  CustomRouteHandlerParams,
  HTTPHandler,
  NextLink,
  NextLinkProps,
  Query,
  Route,
  RouteParams,
  RouterType,
  Routes,
  RoutesCreatorFn
};
