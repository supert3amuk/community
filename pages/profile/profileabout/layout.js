import { stopReportingRuntimeErrors } from "react-error-overlay";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
         <link href="/{name}.css" rel="stylesheet" />
        <body>
          <div>
           
            <div>{children}</div>
          </div>
        </body>
      </html>
    );
  }
  