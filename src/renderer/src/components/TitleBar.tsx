// import React from 'react'
interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitAppRegion?: 'drag' | 'no-drag'
}

const titleBarStyle: ExtendedCSSProperties = {
  WebkitAppRegion: 'drag', // Allows window dragging
  WebkitUserSelect: 'none', // Prevent user selection (cross-browser)
  userSelect: 'none' // Prevent user selection (standard)
}

const TitleBar = (): JSX.Element => {
  return (
    <div
      style={titleBarStyle}
      className="block w-screen border-b-[1.5px]  border-gray-100 h-11 -z-50"
    ></div>
  )
}

export default TitleBar
