import AppSidebar from './components/AppSidebar';
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <SidebarProvider open={false}>
        <AppSidebar />

        <SidebarInset>
          <Header />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
