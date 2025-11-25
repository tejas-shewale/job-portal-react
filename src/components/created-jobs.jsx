import { getMyJobs } from '@/api/apiJobs';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import JobCard from './job-card';

const CreatedJobs = () => {

    const {user} = useUser();

    const {
        loading : loadingApplication,
        data:createdJobs,
        fn: fnCreatedJobs
    } = useFetch(getMyJobs,{
        recruiter_id :user.id
    })

    useEffect(() => {
        fnCreatedJobs();
    },[])
     
    if (loadingApplication) {
    return <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />;
  }



  return (<>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'> 
        {createdJobs?.length ? (
            createdJobs.map((job) => {
                return <JobCard 
                    key={job.id}
                    job={job}
                    savedInit={job?.saved?.length > 0}
                    isMyJob
                />
            } )
        ) : <div>No Jobs Found </div>
    } 
    </div>
  </>
  )
}

export default CreatedJobs