import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

declare module 'next' {
  export interface PageProps<P = Params> {
    params?: P;
    searchParams?: S;
  }
}