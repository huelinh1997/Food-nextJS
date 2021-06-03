import Router from 'next/router';
import { useEffect, useState } from 'react';

const useRouteUrlHistory = () => {
  const { router } = Router;
  const asPathQuery = router?.asPath.split('?')[1];
  const [previousRouteQuery, setPreviousRouterQuery] = useState(
    asPathQuery || '',
  );

  // const router = useRouter();

  const handleBeforeHistoryChange = url => {
    // eslint-disable-next-line no-unused-vars
    const [nextUrl, previousQuery] = url?.split('?') || [];

    if (previousQuery && !previousQuery.includes('step')) {
      setPreviousRouterQuery(previousQuery);
    }
  };

  const resetQueryHistory = () => {
    setPreviousRouterQuery(undefined);
  };

  useEffect(() => {
    Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);

    return () => {
      Router.events.off('beforeHistoryChange', handleBeforeHistoryChange);
    };
  }, []);

  return { previousRouteQuery, resetQueryHistory };
};

export default useRouteUrlHistory;
