// src/app/[token]/page.tsx
import React from 'react'
import TokenPage from './TokenPage'

// This tells Next.js that this dynamic route should be handled client-side
export async function generateStaticParams() {
     // Return empty array - all tokens will be handled client-side
     return []
}

// This tells Next.js to generate this route at build time
export const dynamicParams = true

function page() {
     return <TokenPage />
}

export default page
