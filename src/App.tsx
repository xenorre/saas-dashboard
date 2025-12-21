import AppBarChart from './components/AppBarChart';
import AppSidebar from './components/AppSidebar';
import DashboardCard from './components/DashboardCard';
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
              <div className='grid gap-6 py-8 lg:grid-cols-[1fr_360px]'>
                <DashboardCard
                  title='Vendor Breakdown'
                  description='Keep track of vendors and their security ratings.'
                  buttonText='View full raport'
                >
                  <AppBarChart />
                </DashboardCard>
                {/* Radial Chart */}
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
