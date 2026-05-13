// src/components/mdx/Provider.tsx
'use client';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <Link href={props.href ?? ''} {...props} />,
};

export default function MDXProviderClient({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
