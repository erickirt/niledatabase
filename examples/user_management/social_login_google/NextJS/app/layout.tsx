import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from './page.module.css'

import Themer from './layout/themer';
import Stack from '@mui/joy/Stack';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
      <body className={inter.className}>
        <Themer />
        <main className={styles.main}>
        <div className={styles.description}>
        <div style={{fontSize:"18px", alignItems:"center", display:"flex"}}>
          <Image src="/g-logo.png" alt="Google Logo" className={styles.logo} height={40} width={40} style={{float:"left", padding:"8px"}}/>
          SSO 
        </div>
        <Typography level="h2">Google SSO Login Example</Typography>
        <div>
          <a
            href="https://thenile.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{' '}
            <Image
              src="/nile_logo.svg"
              alt="Nile Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div>
        <Stack> 

        </Stack>
      </div>
          {children}
          <div className={styles.grid}>
        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://www.thenile.dev/docs/user-authentication/social-login/google" target="_blank" rel="noopener">
            <Image src="/g-logo.png" alt="Google Logo" className={styles.logo} height={40} width={40} style={{float:"left", padding:"8px"}}/>
            <Typography level="title-md"> SSO</Typography>
            </Link>
          <CardContent>
            <Typography>Getting started guide</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://thenile.dev"  target="_blank" rel="noopener">
            <Image src="/nile_logo.svg" alt="Nile Logo" className={styles.logo} height={24} width={100}/>
            </Link>
          <CardContent>
            <Typography>Sign up to Nile</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://www.thenile.dev/templates"  target="_blank" rel="noopener">
            <Image src="/nile_logo.svg" alt="Nile Logo" className={styles.logo} height={24} width={100} />
            </Link>
          <CardContent>
            <Typography>Try additional templates</Typography>
          </CardContent>
        </Card>
      </div>
        </main>
      </body>
    </html>
  );
}
