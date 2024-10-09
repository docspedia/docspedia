import { Link } from 'react-router-dom'

import { BookOpenText, Trash2 } from 'lucide-react'

const gTitle = 'r2 setuped successfull r2 setuped successfull'

// interface DocUploadModalProps {
//   handleModalState: () => void
// }

interface DocOverviewProps {
  title: string
  docId: string
}

const DocUploadModal = (): JSX.Element => {
  return (
    <dialog id="doc_upload_modal" className="modal modal-bottom sm:modal-middle">
      <div
        style={{
          borderRadius: '0px'
        }}
        className="modal-box flex flex-col gap-5 bg-base-100"
      >
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
            ✕
          </button>
        </form>
        <h3 className="font-base text-2xl">Upload Document</h3>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs mt-3 rounded-none"
            required
          />
          <input
            name="pdf"
            type="file"
            accept=".pdf, application/pdf"
            className="file-input file-input-bordered w-full max-w-xs rounded-none"
            required
          />
          <button
            // disabled={isDocUploading}
            // type="submit"
            // onClick={()=>document.getElementById('doc_upload_modal').close()}

            className="btn btn-neutral self-end rouned-none rounded-none"
          >
            Save
          </button>
        </form>

        {/* <p className="text-center text-xs text-red-600">
          Please be patient as we feed the document to the AI.
        </p> */}
        {/* {isDocUploading&&(<p className="text-center text-xs text-red-600">
            Please be patient as we feed the document to the AI.
          </p>)} */}
      </div>
    </dialog>
  )
}

const DocOverview = ({ title, docId }: DocOverviewProps): JSX.Element => {
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
  // const [showDocUploadModal, setShowDocUploadModal] = useState<boolean>(false)

  // const handleDocUploadModal = (): void => {
  //   setShowDocUploadModal(!showDocUploadModal)
  // }

  return (
    <>
      <DocUploadModal />
      <div className="flex flex-col items-center px-5 pt-5 pb-3">
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
    </>
  )
}

export default Documents
