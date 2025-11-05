import { useStore } from 'react-redux';
import type { AppStore } from '@/App/store/store';

export const useAppStore = useStore.withTypes<AppStore>()