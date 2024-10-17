import { useEffect, useState } from 'react'

const SelectOllamaModel = (): JSX.Element => {
  const [models, setModels] = useState<object[] | null>(null)
  useEffect(() => {
    fetchModels()
  }, [])

  const fetchModels = async (): Promise<void> => {
    const res = await fetch('http://localhost:11434/api/tags')
    const modelsObj = await res.json()
    if (modelsObj) {
      setModels(modelsObj.models)
    }
  }
  return (
    <>
      <select className="select select-bordered  min-w-64 max-w-xs select-sm text-center">
        <option disabled selected className="">
          Select your model
        </option>
        {models != null
          ? models.map((model, index) => <option key={index}>{model.name}</option>)
          : ''}
      </select>
    </>
  )
}

export default SelectOllamaModel
