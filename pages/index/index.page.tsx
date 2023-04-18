import React from 'react'
import { Counter } from './Counter'
import { Heading, SSRProvider } from "@adobe/react-spectrum"

export { Page }

function Page() {
  return (
    <>
      <SSRProvider>
        <Heading> This is a heading</Heading>
        <h1>Welcome</h1>
        This page is:
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </SSRProvider>
    </>
  )
}
