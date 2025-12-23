import React, { Suspense } from 'react'
import Categories from '../Categories'

export default function LeftAside() {
  return (
    <div>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
            <Categories></Categories>
        </Suspense>
    </div>
  )
}
