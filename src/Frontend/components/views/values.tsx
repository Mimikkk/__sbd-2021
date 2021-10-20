import { ReactNode } from 'react';
import { SomewhereView } from './SomewhereView';
import { PageNotFoundView } from './PageNotFoundView';
import { HomeView } from './HomeView';
import { SportObjectsView } from './SportObjects.view';

export const Views: Record<string, ReactNode> = {
  somewhere: <SomewhereView />,
  pageNotFound: <PageNotFoundView />,
  home: <HomeView />,
  sportObjects: <SportObjectsView />,
};
