import Main from "@/components/features/Main/Main"
import SideBar from "@/components/features/SideBar/SideBar"
export default function home() {
    return(
        <div className="flex h-full">
            <SideBar/>
            <Main/>
        </div>
    )
}