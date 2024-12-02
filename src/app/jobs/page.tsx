// src/app/jobs/page.tsx
import Link from 'next/link';
import Header from '@/app/components/Header'

const jobs = [
  { id: '1', title: 'Software Engineer' },
  { id: '2', title: 'Product Manager' },
  { id: '3', title: 'Data Scientist' },
  { id: '4', title: 'UX/UI Designer' },
  { id: '5', title: 'DevOps Engineer' },
  { id: '6', title: 'Quality Assurance Tester' },
];


export default function Jobs() {
  return (
    <div className="relative w-full h-[660px] bg-transparent ">    
    <Header activePage='jobs'/>
      <section className="relative z-10 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mt-16 mb-24 mx-44">
      
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">Job Listings</h1>
        <ul className="list-none text-lg text-left sm:text-left font-[family-name:var(--font-geist-mono)]">
          {jobs.map((job) => (
            <li key={job.id} className="mb-2">
              <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline">
                {job.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Explore various job opportunities and find the one that fits you best.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <span>← Back to Home</span>
        </Link>
      </footer>
      </section>
    </div>
  );
}
