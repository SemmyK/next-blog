import MyProfilePic from './components/MyProfilePic'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Blog Next App',
	description:
		'Blog app - mini Next.js project created with Next.js Tutorials for Beginners YT tutorial.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} dark:bg-slate-800`}>
				<header>
					<NavBar />
					<MyProfilePic />
				</header>
				{children}
			</body>
		</html>
	)
}
