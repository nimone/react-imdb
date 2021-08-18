import React from 'react'

export default function FlexContainer(props) {
  return (
    <section className="w-full px-2 sm:px-8 md:px-12 lg:px-28 xl:px-48 py-8">
      <h2 className="text-3xl text-dark-50 pb-6">{props.title}</h2>
      <div className="w-full flex justify-center flex-wrap">
        {props.children}
      </div>
    </section>
  )
}