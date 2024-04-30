import { Children } from 'react';
import { AutRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoute } from '../journal/routes/JournalRoute';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AuthRoute } from '../auth/routes/AuthRoute';

export const AppRouter = [
   { 
      path: "/auth/*",
      element: <AuthRoute />,
      children: AutRoutes
   },
   {
      path: "/",
      element: <JournalRoute />,
      children: JournalRoutes
   }
];