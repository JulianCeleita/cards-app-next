export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <h3> This is layout </h3>
        {children}
        </body>
    </html>
  )
}
