import { Link } from 'react-router-dom'

import SelectOllamaModel from './SelectOllamaModel'

import { MoveLeft, Upload } from 'lucide-react'

interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitAppRegion?: 'drag' | 'no-drag'
}

const titleBarStyle: ExtendedCSSProperties = {
  WebkitAppRegion: 'drag', // Allows window dragging
  WebkitUserSelect: 'none', // Prevent user selection (cross-browser)
  userSelect: 'none' // Prevent user selection (standard)
}

const SelectStyle: ExtendedCSSProperties = {
  // due to drag, the select is not working so we are using 'no-drag
  WebkitAppRegion: 'no-drag'
}

const GoToHomePage = (): JSX.Element => {
  return (
    <Link to="/" className="btn btn-xs btn-ghost text-gray-600">
      <MoveLeft width={22} />
    </Link>
  )
}

const TitleBar = (): JSX.Element => {
  return (
    <div
      style={titleBarStyle}
      className="flex items-center justify-center border-b-[1.5px] bg-base-100 border-gray-100 h-11 sticky top-0"
    >
      <div
        style={SelectStyle}
        className="flex items-center justify-between gap-1 bg-white absolute"
      >
        {/* <div className="w-20"></div> */}
        <div className="flex items-center gap-1.5">
          <GoToHomePage />
          <SelectOllamaModel />
        </div>
      </div>
      <button
        style={SelectStyle}
        className="btn btn-ghost btn-sm font-bold right-0 absolute mr-3 "
        onClick={() => document.getElementById('doc_upload_modal').showModal()}
      >
        <Upload width={20} />
      </button>
    </div>
  )
}

export default TitleBar
