"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Code2, Monitor, SearchIcon, MapPinIcon, ArrowRight, Briefcase, Megaphone, PenTool, PieChart, Users, Wallet } from 'lucide-react';
import amdLogo from '@/app/images/amd.png';
import intelLogo from '@/app/images/intel.png';
import teslaLogo from '@/app/images/TESLA.png';
import vodaLogo from '@/app/images/vodafone.png';
import talkLogo from '@/app/images/talkit.png';

import twitter from '@/app/images/twitter.png';



import { Button } from '@/app/components/Button';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const categories = [
  { name: "Design", icon: PenTool, jobs: 235 },
  { name: "Sales", icon: PieChart, jobs: 756 },
  { name: "Marketing", icon: Megaphone, jobs: 140 },
  { name: "Finance", icon: Wallet, jobs: 325 },
  { name: "Technology", icon: Monitor, jobs: 436 },
  { name: "Engineering", icon: Code2, jobs: 542 },
  { name: "Business", icon: Briefcase, jobs: 211 },
  { name: "Human Resource", icon: Users, jobs: 346 },
];

const companies = [
  { name: 'vodafone', logo: vodaLogo, width: 153 },
  { name: 'intel', logo: intelLogo, width: 82 },
  { name: 'tesla', logo: teslaLogo, width: 82 },
  { name: 'amd', logo: amdLogo, width: 82 },
  { name: 'talkit', logo: talkLogo, width: 82 },
];

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  logo: string; // PNG logo file path
  categories: string[];
}

const featuredJobs: Job[] = [
  {
    id: 1,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma...",
    logo: "/images/revolut.png", // PNG file
    categories: ["Marketing", "Design"],
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t...",
    logo: "/images/dropbox.png", // PNG file
    categories: ["Design", "Business"],
  },
  {
    id: 3,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t...",
    logo: "/images/pitch.png", // PNG file
    categories: ["Marketing"],
  },
  {
    id: 4,
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description: "Blinklist is looking for Visual Designer to help team desi...",
    logo: "/images/blinklist.png", // PNG file
    categories: ["Design"],
  },
  {
    id: 5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    logo: "/images/classpass.png", // PNG file
    categories: ["Marketing", "Design"],
  },
  {
    id: 6,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n...",
    logo: "/images/canva.png", // PNG file
    categories: ["Design", "Business"],
  },
  {
    id: 7,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    logo: "/images/godaddy.png", // PNG file
    categories: ["Marketing"],
  },
  {
    id: 8,
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi...",
    logo: "/images/twitter.png", // PNG file
    categories: ["Technology"],
  },
];

// The JobCard component stays the same
const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <div className="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <Image 
        src={job.logo} 
        alt={`${job.company} logo`} 
        width={40} 
        height={40} 
        className="rounded-full" 
      />
      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Full Time</span>
    </div>
    <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
    <p className="text-sm text-gray-600 mb-2">{job.company} · {job.location}</p>
    <p className="text-sm text-gray-500 mb-4">{job.description}</p>
    <div className="flex flex-wrap gap-2">
      {job.categories.map((category, index) => (
        <span 
          key={index} 
          className={`text-xs px-2 py-1 rounded-full ${
            category === 'Marketing' ? 'bg-orange-100 text-orange-600' :
            category === 'Design' ? 'bg-teal-100 text-teal-600' :
            category === 'Business' ? 'bg-purple-100 text-purple-600' :
            'bg-red-100 text-red-600'
          }`}
        >
          {category}
        </span>
      ))}
    </div>
  </div>
);



export default function PageContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Florence, Italy');


  return (
    <div className="relative w-full h-[660px] bg-transparent ">    
      <section className="relative z-10 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mt-16 mb-24 mx-44">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-4 font-red-hat font-extrabold leading-tight">
              Discover<br />more than<br />
              <span className="text-blue-500">5000+ Jobs</span>
            </h1>
            <div className="w-40 h-2 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 mb-8 max-w-md">
              Great platform for job seekers searching for new career heights and passionate about startups.
            </p>
            <div className="bg-white shadow-md p-4 mb-6 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center w-full sm:flex-1">
                  <SearchIcon className="text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Job title or keyword" 
                    className="w-full flex-grow px-2 py-2 border-b-2 focus:outline-none focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center w-full sm:flex-1">
                  <MapPinIcon className="text-gray-400 mr-2" />
                  <select 
                    className="w-full flex-grow px-2 py-2 border-b-2 focus:outline-none focus:border-blue-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Florence, Italy</option>
                    <option>Rome, Italy</option>
                    <option>Milan, Italy</option>
                  </select>
                </div>
                <Button 
                  onClick={() => console.log('Search clicked', { searchTerm, location })}
                  className="w-full sm:w-auto"
                >
                  Search my job
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-500 bg-transparent p-1 rounded">
              Popular: <span className="font-bold">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>
        </section>

      
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Companies we helped grow</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-36">
              {companies.map((company) => (
                <div key={company.name} className="relative">
                  <Image 
                    src={company.logo} 
                    alt={company.name} 
                    width={company.width} 
                    height={32} 
                    className="mx-1.5 mix-blend-multiply transition-opacity duration-300 hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white mx-44">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Explore by <span className="text-blue-500">category</span>
              </h2>
              <Link href="/jobs" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                Show all jobs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/jobs/${category.name.toLowerCase()}`}
                  className="flex flex-col items-start p-6 transition-colors border border-gray-200 bg-white hover:bg-blue-600 hover:border-transparent group"
                >
                  <category.icon className="h-8 w-8 text-blue-500 group-hover:text-white" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 group-hover:text-blue-100">
                    {category.jobs} jobs available
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-16 mx-10">
          <div className="container mx-auto px-4 lg:px-44">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Featured <span className="text-blue-500">jobs</span>
              </h2>
              <Link href="/jobs" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                Show all jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
