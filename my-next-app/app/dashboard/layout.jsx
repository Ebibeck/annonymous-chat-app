import NavBar from '../components/BottomNavBar';

export default function DashboardLayout({ children }) {
    return (
          <div className='w-screen h-screen flex flex-col'>
            <div className=' flex w-full h-full'>{children}</div>
            <div className='bg-gray-800 flex w-full h-20'>
              <NavBar />
            </div>
          </div>
    );
  }
  