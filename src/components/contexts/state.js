import React from 'react'
import {DataProvider} from './'

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }

function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[<DataProvider />]}
        >
            {children}
        </ProviderComposer>
    )
}

export default ContextProvider