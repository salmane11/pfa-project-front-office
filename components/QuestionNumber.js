import React from 'react'

export default function QuestionNumber({ number, color }) {
  return (
    <div>
      <div className="ml-3 h-10 w-10 rounded-full bg-blue-100 hover:bg-blue-500">
        <p className="pt-[8px] text-center font-semibold">{number}</p>
      </div>
    </div>
  )
}
