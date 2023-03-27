import Navlink from './NavLink';
import {MdHome, MdMessage} from 'react-icons/md'
import {TbSettingsFilled} from 'react-icons/tb'

export default function NavlinkBar() {
  return (
    <nav className='flex bg-gray-800 h-full w-full sm:px-2 items-center justify-center'>
      <div className='flex space-x-10'>
        <Navlink href='/'>{<MdHome className='h-5 w-5 '/>}<span className='font-medium'>Home</span></Navlink>
        <Navlink href='/inbox'>{<MdMessage className='h-5 w-5 '/>}<span className='font-medium'>Inbox</span></Navlink>
        <Navlink href='/settings'>{<TbSettingsFilled className='h-5 w-5 '/>}<span className='font-medium'>Settings</span></Navlink>
      </div>
    </nav>
  );
}
