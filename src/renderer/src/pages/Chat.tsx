import { Send } from 'lucide-react'

interface ChatUIProps {
  role: string
  content: string
}

const ChatUI = ({ role, content }: ChatUIProps): JSX.Element => {
  if (role === 'user')
    return (
      <div className="flex flex-row gap-3 lg:gap-5 items-start my-5">
        <div className="avatar ">
          <div className="w-7 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-gray-500">
              <circle cx="12" cy="8" r="4" fill="currentColor" />
              <path
                d="M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="text-base tracking-wide leading-relaxed">
          <h1>{content}</h1>
        </div>
      </div>
    )
  return (
    <>
      <div className="flex flex-row gap-3 lg:gap-5 items-start ">
        <div className="avatar ">
          <div className="w-7 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-500"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M9 13a4.5 4.5 0 0 0 3-4" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M12 13h4" />
              <path d="M12 18h6a2 2 0 0 1 2 2v1" />
              <path d="M12 8h8" />
              <path d="M16 8V5a2 2 0 0 1 2-2" />
              <circle cx="16" cy="13" r=".5" />
              <circle cx="18" cy="3" r=".5" />
              <circle cx="20" cy="21" r=".5" />
              <circle cx="20" cy="8" r=".5" />
            </svg>
          </div>
        </div>
        <div className="text-base tracking-wide leading-relaxed">{content}</div>
      </div>
    </>
  )
}

const Chat = (): JSX.Element => {
  const chats = [
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'user',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      role: 'ai',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ]

  return (
    <section className="fixed w-screen">
      <div className="pt-2 xl:pt-3 px-12 mx-auto max-w-4xl overflow-y-scroll h-[38rem] xl:h-[50rem] scrollbar-hide">
        {chats.map((chat, index) => (
          <ChatUI role={chat.role} content={chat.content} key={index} />
        ))}
        <div className="block h-5 "></div>
        <div className="block h-5 "></div>
        <div className="block h-5 "></div>
        <div className="block h-5 "></div>

        {/* <div ref={messagesEndRef} /> Invisible element to help scroll into view */}
      </div>
      <form className="navbar fixed justify-center bottom-0">
        <input
          type="text"
          placeholder="Type your prompt here"
          className="input w-full bg-base-200 rounded-full py-7 mb-3 max-w-2xl xl:max-w-3xl shadow-lg shadow-spread-[0.7rem] shadow-blur-14 shadow-base-200"
        />
        <button type="submit">
          <Send size={25} className="-ml-10 text-gray-600" />
        </button>
      </form>
    </section>
  )
}

export default Chat
