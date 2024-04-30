import { AutRouthes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = [
   { 
      path: "/auth/*",
      element: <AutRouthes />
   },
   {
      path: "/*",
      element: <JournalRoutes />
   }
];