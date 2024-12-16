import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import Page1 from "src/pages/page1"
import Page2 from "src/pages/page2"
import DashboardLayout from 'src/layouts/dashboard';


export const IndexPage = lazy(() => import('src/pages/app'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: '/page1', element: <Page1 /> },
        { path: '/page2', element: <Page2 /> },
      ],
    },
    
  ]);

  return routes;
}
