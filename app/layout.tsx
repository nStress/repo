import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/auth-provider';
import { ParticleBackground } from '@/components/particle-background';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'AI Income Academy | Master AI & Earn Income',
  description: 'Learn how to leverage AI to create passive income streams with our step-by-step course.',
  openGraph: {
    title: 'AI Income Academy | Master AI & Earn Income',
    description: 'Learn how to leverage AI to create passive income streams with our step-by-step course.',
    images: ['/images/og-image.jpg'],
    url: 'https://ai-income-academy.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Income Academy | Master AI & Earn Income',
    description: 'Learn how to leverage AI to create passive income streams with our step-by-step course.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-[#031122] text-white min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ParticleBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
              <NavBar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}