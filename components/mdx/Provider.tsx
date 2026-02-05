// src/components/mdx/Provider.tsx
'use client';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';

const components = {
  a: (props: any) => <Link {...props} />, // 範例：客製 <a>
  // 也可加 img / pre / code 等
};

export default function MDXProviderClient({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
