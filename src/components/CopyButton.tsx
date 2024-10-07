import { BiSolidCopy } from 'react-icons/bi'
type Props = {
  text: string
}

export default function CopyButton({ text }: Props) {
  return (
    <button
      className="top-0 right-0 bg-[#44475A] text-[#F8F8F2] px-2 py-1 text-xs font-bold rounded-tr rounded-bl"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <BiSolidCopy className="inline-block mr-1 mb-1" />
      Copy
    </button>
  )
}
