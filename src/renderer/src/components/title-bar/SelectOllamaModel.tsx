const SelectOllamaModel = (): JSX.Element => {
  return (
    <>
      <select className="select select-bordered  min-w-64 max-w-xs select-sm text-center">
        <option disabled selected className="">
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
