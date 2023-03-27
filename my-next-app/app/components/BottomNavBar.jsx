import Navlink from './NavLink';

export default function NavlinkBar() {
  return (
    <nav className='flex bg-gray-800 h-full w-full sm:px-2 items-center justify-center'>
      <div className='flex space-x-6'>
        <Navlink href='/'>Home</Navlink>
        <Navlink href='#'>Inbox</Navlink>
        <Navlink href='#'>Settings</Navlink>
      </div>
    </nav>
  );
}
