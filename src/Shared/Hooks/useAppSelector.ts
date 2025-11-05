import { useSelector } from 'react-redux';
import type { RootState } from '@/App/store/store';

export const useAppSelector = useSelector.withTypes<RootState>();