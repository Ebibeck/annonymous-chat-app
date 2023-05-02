
import Provider from './components/provider';
import './globals.css';

export const metadata = {
  title: 'Anonymail | Anonymous chatting application',
  description: 'Send and receive messages anonymously | Anonymail',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
         {children}
        </Provider>
      </body>
    </html>
  );
}
