const SelectOllamaModel = (): JSX.Element => {
  return (
    <>
      <select className="select select-bordered  max-w-xs select-sm focus:ring-0 focus:ring-offset-0">
        <option disabled selected>
          Select your model
        </option>
        <option>llama3.2:1b</option>
        <option>llama3.2:latest </option>
        <option>gemma2:2b</option>
        <option>llama3.2:3b</option>
      </select>
    </>
  )
}

export default SelectOllamaModel
