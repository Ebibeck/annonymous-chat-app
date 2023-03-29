import NavBar from './components/BottomNavBar';
import './globals.css';
import { Inter } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anonymail | Anonymous chatting application',
  description: 'Send and receive messages anonymously | Anonymail',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter}>
        <div className='w-screen h-screen flex flex-col'>
          <div className=' flex w-full h-full'>{children}</div>
          <div className='bg-gray-800 flex w-full h-20'>
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}
