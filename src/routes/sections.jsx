import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import pajak from "src/pages/pajak"
import apbn from "src/pages/apbn"
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
        { path: '/pajak', element: <pajak /> },
        { path: '/apbn', element: <apbn /> },
      ],
    },
    
  ]);

  return routes;
}
