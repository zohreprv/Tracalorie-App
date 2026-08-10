import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import type { StatContextType, BurnedType, ConsumedType } from '../types';

const StatContext = createContext<StatContextType | null>(null);

export function StatProvider({ children }: { children: ReactNode }) {
  const [limit, setLimit] = useState<number>(() => {
    const lim = localStorage.getItem('limit');
    return lim ? JSON.parse(lim) : 2000;
  });

  const [consumed, setConsumed] = useState<ConsumedType[]>(() => {
    const cons = localStorage.getItem('consumed');
    return cons ? JSON.parse(cons) : [];
  });

  const [burned, setBurned] = useState<BurnedType[]>(() => {
    const burn = localStorage.getItem('burned');
    return burn ? JSON.parse(burn) : [];
  });

  useEffect(() => {
    localStorage.setItem('consumed', JSON.stringify(consumed));
  }, [consumed]);

  useEffect(() => {
    localStorage.setItem('burned', JSON.stringify(burned));
  }, [burned]);

  useEffect(() => {
    localStorage.setItem('limit', JSON.stringify(limit));
  }, [limit]);

  return (
    <StatContext.Provider
      value={{ limit, consumed, burned, setLimit, setConsumed, setBurned }}
    >
      {children}
    </StatContext.Provider>
  );
}
export function useStat() {
  return useContext(StatContext);
}
