import Image from 'next/image'
import { MdGridView } from "react-icons/md";
import { LuWallet, LuReceipt} from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { TbDevicesDollar, TbSettings } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";
export default function SideBar() {
    return (
        <aside className='aside'>
           <div className='aside__container'>
                <div className='aside__container-logo'>
                    <a href=""><Image src="/img/Logo.png" fill alt='Logo'/></a>
                </div>
                <nav className='aside__nav'>
                    <ul className='aside__nav-list'>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'>
                                <span><MdGridView/></span>
                                <span>Overview</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'> 
                                <span><LuWallet/></span>
                                <span>Balances</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'> 
                                <span><GrTransaction/></span>
                                <span>Transactions</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'> 
                                <span><TbDevicesDollar/></span>
                                <span>Bills</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'> 
                                <span><LuReceipt/></span>
                                <span>Expenses</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'> 
                                <span><TfiTarget/></span>
                                <span>Goals</span>
                            </a>
                        </li>
                        <li className='aside__nav-item'>
                            <a href="" className='aside__nav-link'>
                                <span><TbSettings/></span>
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
           </div>
           <div></div>
        </aside>
    )
}