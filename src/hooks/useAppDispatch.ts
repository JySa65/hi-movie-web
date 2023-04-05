import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@Store/index';

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default useAppDispatch;
