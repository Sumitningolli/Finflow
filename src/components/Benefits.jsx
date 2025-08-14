import React from 'react'
import "../App.css"

const Benefits = () => {
  return (
    <div id='benefits' className="move p-5 md:py-10 pb-15  bg-gray-300">
      <h1 className="text-2xl font-bold pl-3 md:text-center">Benefits</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full text-center">
          <thead className="text-gray-300 bg-[#030712]">
            <tr>
              <th className="p-2">Benefit</th>
              <th className="p-2">Available</th>
              <th className="p-2">Competitors</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-300 bg-[#181f33]">
              <td className="p-2">0% Transaction Fee</td>
              <td className="p-2">✔</td>
              <td className="p-2">❌</td>
            </tr>
            <tr className="text-gray-300 bg-[#181f33]">
              <td className="p-2">24/7 Support</td>
              <td className="p-2">✔</td>
              <td className="p-2">❌</td>
            </tr>
            <tr className="text-gray-300 bg-[#181f33]">
              <td className="p-2">RBI-compliant Security</td>
              <td className="p-2">✔</td>
              <td className="p-2">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Benefits
