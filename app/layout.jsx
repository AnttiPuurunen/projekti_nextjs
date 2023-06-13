import "styles/globals.css";

export const metadata = {
  title: "Tieliikennesää",
  description: "Tarkastele säätilannetta tien päällä"
}

const RootLayout = ( {children} ) => {
  return (
    <html lang="en">
        <body>
            <div>
                
            </div>

            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout