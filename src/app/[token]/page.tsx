import React from 'react'
import TokenPage from './TokenPage'

export async function generateStaticParams() {
     return []
}

function page() {
     return <TokenPage />
}

export default page
