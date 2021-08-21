import React from 'react'

export default function FlexContainer(props) {
  return (
    <section className="w-full max-w-5xl m-auto px-2 md:px-8 py-8">
      <h2 className="text-3xl text-dark-50 pb-6">{props.title}</h2>
      <div className="w-full flex justify-center flex-wrap">
        {props.children}
      </div>
    </section>
  )
}