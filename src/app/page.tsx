'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={'/counter'}>Counter Page</Link>
      <Link href={'/to-do-list'}>To-Do-List Page</Link>
    </main>
  );
}
