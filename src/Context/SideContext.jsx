import { createContext, useContext } from 'react';

export const SideContext = createContext();

export const useSideContext = () => {
	return useContext(SideContext);
};
