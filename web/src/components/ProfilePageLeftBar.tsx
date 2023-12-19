import { NavLink } from "react-router-dom";

export default function ProfilePageLeftBar() {
    return (
        <nav className="flex-col justify-between min-w-[220px] bg-purple-2 h-screen">
            <div className="py-10 flex justify-center items-center border-b-2">
                <p className="text-2xl font-bold">Profile</p>
            </div>
            <div className="py-5 flex flex-col justify-center items-baseline">
                <div className="py-5 px-5 hover:bg-primary-500">
                    <NavLink to="/inbox">
                        <p className="text-md font-bold ">User Profile</p>
                    </NavLink>
                </div>
                <div className="py-5 px-5 hover:bg-primary-500">
                    <NavLink to="/inbox">
                        <p className="text-md font-bold">Manage Accounts</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}