import { TrendingUpIcon } from 'lucide-react';
import AppBarChart from './components/AppBarChart';
import AppRadialChart from './components/AppRadialChart';
import AppSidebar from './components/AppSidebar';
import DashboardCard from './components/DashboardCard';
import Header from './components/Header';
import Page from './components/Page';
import PageHeader from './components/PageHeader';
import { ThemeProvider } from './components/ThemeProvider';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import DashboardTable from './components/DashboardTable';

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

                <DashboardCard
                  title='Vendor Monitored'
                  description="You're using 80% of available spots."
                  buttonText='Upgrade plan'
                >
                  <div className='flex justify-between items-start'>
                    <AppRadialChart />

                    <div className='flex items-center gap-2'>
                      <TrendingUpIcon
                        size={20}
                        className='text-emerald-500 dark:text-emerald-400'
                      />

                      <span className='text-emerald-500 dark:text-emerald-400 font-medium'>
                        10%
                      </span>
                    </div>
                  </div>

                  <div className='mt-6 lg:mt-8'>
                    <p className='font-medium'>
                      You've almost reached your limit
                    </p>

                    <p className='text-muted-foreground'>
                      You have used 80% of your available spots. Upgrade plan to
                      monitor more vendors.
                    </p>
                  </div>
                </DashboardCard>
              </div>

              <DashboardTable />
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
