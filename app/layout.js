import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const nunito = Nunito({ subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "AI Career Coach",
  description: "AI-powered career guidance and interview preparation",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${nunito.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

           <footer className="relative overflow-hidden">
  {/* Background */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-indigo-50 via-white to-cyan-50
      dark:from-[#0b0b12] dark:via-[#050505] dark:to-[#0b0b12]
    "
  />

  {/* Subtle grid / noise */}
  <div
    className="
      absolute inset-0
      opacity-40
      bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
      bg-[size:32px_32px]
      dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
    "
  />

  {/* Content */}
  <div className="relative z-10 py-12">
    <div className="container mx-auto px-6 text-center space-y-4">
      <p className="text-gray-700 dark:text-gray-300">
        Built with passion by{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
          CHALPATI PRANEETH
        </span>
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AI Career Coach. All rights reserved.
      </p>
    </div>
  </div>
</footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
