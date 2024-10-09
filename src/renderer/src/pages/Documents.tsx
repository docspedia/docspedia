import { Link } from 'react-router-dom'

import { BookOpenText, Trash2 } from 'lucide-react'

interface DocOverviewType {
  title: string
  docId: string
}

const gTitle = 'r2 setuped successfull r2 setuped successfull'

const DocOverview = ({ title, docId }: DocOverviewType): JSX.Element => {
  console.log(docId)
  return (
    <div className="flex flex-row items-center h-14 w-full overflow-x-auto px-3 bg-base-200">
      <div className="flex-1 flex flex-row items-center gap-5 md:gap-7">
        <BookOpenText width={20} className="" />
        <Link to="/chat" className="hover:underline cursor-pointer max-w-md font-light">
          <span className="lg:hidden">{title.substr(0, 19)}</span>
          <span className="hidden lg:block">{title.substr(0, 55)}</span>
        </Link>
      </div>
      <Trash2 width={20} className="cursor-pointer" />
    </div>
  )
}

const Documents = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-5  pt-5 pb-3">
      <div className="flex flex-col gap-3 w-full max-w-6xl">
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
        <DocOverview title={gTitle} docId="123456678899" />
      </div>
    </div>
  )
}

export default Documents
