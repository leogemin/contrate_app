import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { Theme } from '@radix-ui/themes';


function AppContent() {
    const themeContext = useContext(ThemeContext);

    return (
        <Theme appearance={themeContext?.theme}>
            <div style={{ display: 'flex' }} data-theme={themeContext?.theme}>
                <Sidebar />
                <main style={{ flex: 1, padding: '20px' }}>
                    <Outlet />
                </main>
            </div>
        </Theme>
    )
}

function App() {
  return (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
  );
}

export default App;
