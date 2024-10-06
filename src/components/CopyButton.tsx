import React from 'react'

type Props = {
  text: string
}

export default function CopyButton({ text }: Props) {
  return (
    <button
      className="absolute top-0 right-0 bg-[#44475A] text-[#F8F8F2] px-2 py-1 text-xs font-bold rounded-tr rounded-bl"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      Copy
    </button>
  )
}
