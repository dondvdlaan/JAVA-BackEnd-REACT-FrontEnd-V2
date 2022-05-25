import { createContext } from 'react';

interface ContextState {
    // set the type of state you want to handle with context e.g.
    title: string | null;
  }

const AppContext = createContext({} as ContextState);

export default AppContext;