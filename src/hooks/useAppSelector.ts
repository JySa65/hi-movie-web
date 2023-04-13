import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@Store/index';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
