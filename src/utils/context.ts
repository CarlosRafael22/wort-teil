import {createContext, useContext, Dispatch, SetStateAction} from 'react';

import {PageState} from '../constants/types';

interface IPageContext {
  page: PageState;
  setPage: Dispatch<SetStateAction<PageState>>;
}

const PageContext = createContext<IPageContext | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within PageContext Provider');
  }

  return context;
};

export default PageContext;
