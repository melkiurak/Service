import MastercardLogo from '@/img/Mastercard-Logo.png';
import Image from 'next/image';
import { BsArrowUpRightCircleFill  } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export default function Balance(){
    return (
        <div className="flex-1 flex-col">
            <h2>Total Balance</h2>
            <div className="bg-white p-6 max-w-[304px] w-full rounded-lg ">
                <div className="pb-5">
                    <div className="flex items-center justify-between w-full border-b border-[#F3F3F3] pb-3">
                        <h2 className="font-extrabold! text-black!">$240,399</h2>
                        <a href=""><h6 className="text-[#525256]">All Accounts</h6></a>
                    </div>
                    <div className="bg-[#299D91] w-full rounded-sm p-4 flex justify-between">
                        <div className="text-[#FFFFFF]/70">
                            <h6>Account Type</h6>
                            <h5 className="text-white">Credit Card</h5>
                            <h6>**** **** **** 2598</h6>
                        </div>
                        <div className='flex flex-col items-end justify-between'>
                            <div>
                                <Image src={MastercardLogo} alt="Mastercard Logo"  width={40} height={30}/>
                            </div>
                            <div className='flex items-center gap-2'>
                                <h5 className='text-white'>25000$</h5>
                                <BsArrowUpRightCircleFill  className="text-white text-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='paginationBtn'>
                        <IoIosArrowBack/>
                        <h6>Previous</h6>
                    </button>
                    <div></div>
                    <button className='paginationBtn'>
                        <h6>Next</h6>
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
        </div>
    )
}