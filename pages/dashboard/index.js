import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
import RecentOrders from '../../components/RecentOrders'
import TopCards from '../../components/TopCards'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-15 shadow-sm dark:border-gray-700'>
        <Header/>
        <TopCards/>
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart/>
          <RecentOrders/>
        </div>
      </main>
    </>
  )
}
