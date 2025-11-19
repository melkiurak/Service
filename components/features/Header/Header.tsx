import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
export default function Header() {
    const date = new Date();
    return (
        <header className="flex justify-between items-center h-[88px]">
            <div className="flex items-center gap-6 px-6">
                <h1>Hello</h1>
                <span className="text-[#9F9F9F] flex items-center leading-5">  
                    <MdKeyboardDoubleArrowRight className="text-xl"/>
                    <span className="font-inter text-sm">{date.toLocaleDateString('en-US',{
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}</span>
                </span>
            </div>
            <div className="h-12 flex justify-between items-center max-w-[500px] w-full gap-10">
                <button className="w-6 h-6 text-2xl">
                    <IoIosNotifications/>
                </button>
                <form action="" className="h-full flex-1 relative">
                    <input type="text" className="bg-white! rounded-lg h-full w-full text-[#9F9F9F] font-inter px-4! focus:outline-none" placeholder="Serch here" />
                    <button className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl text-[#525256]" >
                        <CiSearch/>
                    </button>
                </form>
            </div>
        </header>
    )
}