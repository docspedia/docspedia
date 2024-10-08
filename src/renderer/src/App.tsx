import TitleBar from './components/title-bar/TitleBar'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TitleBar />
      <h1 className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus aliquid
        vero modi illum, nobis tenetur placeat dolore corporis omnis optio officiis quis aperiam,
        velit nulla reprehenderit temporibus possimus dolorum.
      </h1>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-secondary rounded-full btn-sm">Click me</button>
      <button className="btn btn-accent">Click me</button>
      <button className="btn">Click me</button>
      <button className="btn btn-neutral">Click me</button>
      <button className="btn btn-success">Click me</button>
      <button className="btn btn-warning">Click me</button>
    </>
  )
}

export default App
