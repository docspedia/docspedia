import SelectOllamaModel from './SelectOllamaModel'

import { MoveLeft } from 'lucide-react'

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
    <button className="btn btn-xs btn-ghost text-gray-600">
      <MoveLeft width={22} />
    </button>
  )
}

const TitleBar = (): JSX.Element => {
  return (
    <div
      style={titleBarStyle}
      className="flex items-center justify-center border-b-[1.5px]  border-gray-100 h-11 "
    >
      <div style={SelectStyle} className="flex flex-row items-center justify-center gap-1 ">
        <GoToHomePage />
        <SelectOllamaModel />
      </div>
    </div>
  )
}

export default TitleBar
