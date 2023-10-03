import '@styles/global.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Providers from './providers'

export const metadata = {
    title: "Nextjs Course",
    description: "Learn Next.js"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
