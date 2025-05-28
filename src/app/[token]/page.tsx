// src/app/[token]/page.tsx
import React from 'react'
import TokenPage from './TokenPage'

// This tells Next.js that this dynamic route should be handled client-side
export async function generateStaticParams() {
     // Example: return [{ token: 'foo' }, { token: 'bar' }]
     return [
          { token: 'foo' },
          { token: 'bar' },
          // ...add all tokens you want to statically generate
     ]
}
function page() {
     return <TokenPage />
}

export default page
