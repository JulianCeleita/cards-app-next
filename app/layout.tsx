import StyleComponentsRegistry from "./lib/registry";
import "./tailwind-global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <StyleComponentsRegistry>
        {children}
        </StyleComponentsRegistry>
      </body>
    </html>
  )
}
