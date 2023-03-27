import Navlink from './NavLink';
import {MdHome, MdMessage} from 'react-icons/md'
import {TbSettingsFilled} from 'react-icons/tb'

export default function NavlinkBar() {
  return (
    <nav className='flex bg-gray-800 h-full w-full sm:px-2 items-center justify-center'>
      <div className='flex space-x-6'>
        <Navlink href='/'>{<MdHome/>}Home</Navlink>
        <Navlink href='#'>{<MdMessage/>}Inbox</Navlink>
        <Navlink href='#'>{<TbSettingsFilled/>}Settings</Navlink>
      </div>
    </nav>
  );
}
