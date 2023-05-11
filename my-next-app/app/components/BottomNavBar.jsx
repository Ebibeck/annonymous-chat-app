import { Home, MessageSquare, Settings } from "lucide-react";
import Navlink from "./NavLink";

export default function NavlinkBar() {
  return (
    <nav className="flex bg-gray-800 h-full w-full sm:px-2 items-center justify-center">
      <div className="flex space-x-10">
        <Navlink href="/dashboard">
          {<Home className="h-5 w-5 " />}
          <span className="font-medium">Home</span>
        </Navlink>
        <Navlink href="/dashboard/inbox">
          {<MessageSquare className="h-5 w-5 " />}
          <span className="font-medium">Inbox</span>
        </Navlink>
        <Navlink href="/dashboard/settings">
          {<Settings className="h-5 w-5 " />}
          <span className="font-medium">Settings</span>
        </Navlink>
      </div>
    </nav>
  );
}
