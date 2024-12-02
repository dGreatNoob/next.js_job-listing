"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Updated jobs array with detailed information
const jobs = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Responsible for developing and maintaining software applications. Requires proficiency in programming languages such as JavaScript, Python, or Java.',
    requirements: 'Experience with modern programming languages, software development tools, and agile methodologies.',
    location: 'New York, NY',
  },
  {
    id: '2',
    title: 'Product Manager',
    description: 'Oversees the development and launch of products, from inception to delivery. Requires strong leadership and project management skills.',
    requirements: 'Experience in product lifecycle management, strong analytical and communication skills, and knowledge of market trends.',
    location: 'San Francisco, CA',
  },
  {
    id: '3',
    title: 'Data Scientist',
    description: 'Analyzes and interprets complex data to help organizations make informed decisions. Requires expertise in statistical analysis and machine learning.',
    requirements: 'Proficiency in data analysis tools, programming languages such as R or Python, and strong problem-solving skills.',
    location: 'Austin, TX',
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    description: 'Designs user interfaces and user experiences for digital products. Requires creativity and an understanding of user-centered design principles.',
    requirements: 'Experience with design tools like Figma or Sketch, strong portfolio, and ability to translate user needs into engaging designs.',
    location: 'Seattle, WA',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    description: 'Combines software development and IT operations to enhance the efficiency of the development lifecycle. Requires knowledge of CI/CD processes and infrastructure management.',
    requirements: 'Experience with automation tools, cloud services, and scripting languages. Strong problem-solving skills and ability to work in a fast-paced environment.',
    location: 'Chicago, IL',
  },
  {
    id: '6',
    title: 'Quality Assurance Tester',
    description: 'Ensures the quality and functionality of software products through rigorous testing and debugging. Requires attention to detail and analytical skills.',
    requirements: 'Experience with various testing tools and methodologies, strong understanding of software development life cycle, and ability to identify and document defects.',
    location: 'Boston, MA',
  },
];

const JobDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const job = jobs.find(job => job.id === id);

  // Fallback if job is not found
  if (!job) {
    return (
      <div className="p-8 grid grid-rows-[auto_1fr_auto] min-h-screen">
        <h1 className="text-3xl font-bold text-center">Job Not Found</h1>
        <p className="mt-4 text-center">Sorry, the job you're looking for does not exist.</p>
        <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
          <Link href="/jobs" className="text-blue-600 hover:underline flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Job Listings
          </Link>
          <Link href="/" className="text-white-600 hover:underline flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Home
          </Link>
        </footer>
      </div>
    );
  }

  return (
    <div className="p-8 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <h1 className="text-3xl font-bold text-center">{job.title}</h1>
      <div className="mt-4 bg-black-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p className="mt-2">{job.description}</p>
        <h2 className="text-xl font-semibold mt-4">Requirements:</h2>
        <p className="mt-2">{job.requirements}</p>
        <h2 className="text-xl font-semibold mt-4">Location:</h2>
        <p className="mt-2">{job.location}</p>
      </div>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
        <Link href="/jobs" className="text-white-600 hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Job Listings
        </Link>
        <Link href="/" className="text-white-600 hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default JobDetail;
