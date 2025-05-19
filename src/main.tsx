import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './providers/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
			<ToastContainer
				style={{
					fontFamily: 'Poppins, sans-serif',
				}}
			/>
		</ThemeProvider>
	</StrictMode>
);
