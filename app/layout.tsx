import '../styles/globals.css'

import Sidebar from '../components/Sidebar'

import UserProvider from '../providers/UserProvider'
import SupabaseProvider from '../providers/SupabaseProvider'
import ToasterProvider from '../providers/ToasterProvider'
import ModalProvider from '../providers/ModalProvider'
import getActiveProductsWithPrices from '../actions/getActiveProductsWithPrices'

// import getContentsByUserId from '../actions/getContentsByUserId'



// export const metadata = {
//   title: 'Spotify Clone is change for me',
//   description: 'Welcome to Learn',
// }

// export const dynamic = 'force-dynamic'
export const dynamic = 'force-static'
export const revalidate = 0


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getActiveProductsWithPrices()

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
