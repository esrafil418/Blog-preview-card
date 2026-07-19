import illustration from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

export default function App() {
  return (
    <div className='font-figtree flex items-center justify-center bg-[#f6d050] min-h-screen'>
      <div className="flex flex-col gap-4 bg-[#ffffff] items-center justify-center px-5 py-6 rounded-xl max-w-sm border border-black shadow-[8px_8px_0px_0px_#000000] mx-5">
        <div className="">
          <img src={illustration} alt="illustration-article" className="rounded-xl h-full overflow-hidden"/>
        </div>
      <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-bold bg-[#f6d050] rounded-md px-3 py-1 inline-block">Learning</p>
          <p className="text-sm text-black/80">Published 21 Dec 2023</p>
        </div>
        <div className="">
          <p className="text-2xl font-extrabold hover:text-[#f6d050] cursor-pointer transition-colors duration-300">HTML & CSS foundations</p>
          <p className="text-gray-500 leading-relaxed max-w-xs">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div className="flex items-center justify-baseline gap-3 font-bold">
          <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full cursor-pointer"/>
          <p className="hover:text-[#dab747] cursor-pointer transition-colors duration-300">Greg Hooper</p>
        </div>
      </div>
      </div>
    </div>
  )
}
