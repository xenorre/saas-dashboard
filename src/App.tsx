import AppSidebar from './components/AppSidebar';
import Header from './components/Header';
import Page from './components/Page';
import PageHeader from './components/PageHeader';
import { ThemeProvider } from './components/ThemeProvider';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <SidebarProvider open={false}>
        <AppSidebar />

        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader />
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
