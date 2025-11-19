import Image from 'next/image'
import { MdGridView } from "react-icons/md";
import { LuWallet, LuReceipt} from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { TbDevicesDollar, TbSettings } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";
export default function SideBar() {
    return (
        <aside className='bg-[#191919] h-full'>
           <div className='px-7 py-12'>
                <div>
                    <a href=""><Image src="/img/Logo.png" fill alt='Logo' style={{ all: 'unset' }}/></a>
                </div>
                <nav className='mt-5'>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href="" className='aside__nav-link' >
                                <span className='aside__nav-icons'><MdGridView/></span>
                                <span className='text-white/70 font-inter'>Overview</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'> 
                                <span className='aside__nav-icons'><LuWallet/></span>
                                <span className='text-white/70 font-inter'>Balances</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'> 
                                <span className='aside__nav-icons'><GrTransaction/></span>
                                <span className='text-white/70 font-inter'>Transactions</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'> 
                                <span className='aside__nav-icons'><TbDevicesDollar/></span>
                                <span className='text-white/70 font-inter'>Bills</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'> 
                                <span className='aside__nav-icons'><LuReceipt/></span>
                                <span className='text-white/70 font-inter'>Expenses</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'> 
                                <span className='aside__nav-icons'><TfiTarget/></span>
                                <span className='text-white/70 font-inter'>Goals</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className='aside__nav-link'>
                                <span  className='aside__nav-icons'><TbSettings/></span>
                                <span className='text-white/70 font-inter'>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
           </div>
           <div></div>
        </aside>
    )
}