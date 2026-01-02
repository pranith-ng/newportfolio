import "./globals.css";
import { GlobalProvider } from "./Context/Context";


export const metadata = {
  title: "Portfolio",
  description: "Frontend developer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
