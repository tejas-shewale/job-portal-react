import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import ApplicationCard from "@/components/application-card";
import ApplyJobDrawer from "@/components/apply-job";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import MDEditor from "@uiw/react-md-editor";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const JobPage = () => {
  const { isLoaded, user } = useUser();
  const { id } = useParams();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, { job_id: id });

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    { job_id: id }
  );

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 mb-8 ">
        <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl text-center pb-3 overflow">
          {job?.title}
        </h1>
        <img src={job?.company.logo_url} className="h-12" alt={job?.title} />
      </div>

      <div className="flex flex-wrap justify-between gap-y-3 sm:gap-y-0 text-sm">
        <div className="flex gap-2 items-center whitespace-normal max-w-[45%]">
          <MapPinIcon />
          {job?.location}
        </div>

        <div className="flex gap-2 items-center">
          <Briefcase /> {job?.applications?.length} Applications
        </div>

        <div className="flex gap-2 items-center">
          {job?.isOpen ? (
            <>
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      {/* Hiring status */}
      {loadingHiringStatus && <BarLoader width={"100%"} color="#36d7b7" />}
      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`w-full ${
              job?.isOpen ? "select-trigger-open" : "select-trigger-closed"
            }`}
          >
            <SelectValue
              placeholder={
                "Hiring Status" + (job?.isOpen ? "(Open) " : "(Closed)")
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold">About the job</h2>
      <p className="sm:text-lg">{job?.description}</p>
      <h2 className="text-2xl sm:text-3xl font-bold">
        What we are looking for
      </h2>

      <MDEditor.Markdown
        source={job?.requirements}
        className="bg-transparent sm:text-lg"
      />

      {/* Render Applications */}
      {job?.recruiter_id !== user?.id && (
        <ApplyJobDrawer
          job={job}
          user={user}
          fetchJob={fnJob}
          applied={job?.applications?.find((ap) => ap.candidate_id == user.id)}
        />
      )}

      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Applications</h2>
          {job?.applications.map((application) => {
            return (
              <ApplicationCard
                key={application.id}
                application={application}
                refetch={fnJob} // ✅ This will refetch the job and all its applications
              />
            );
          })}
        </div>
      )}

      <div className="w-full">
        <Link to="/jobs">
          <Button variant="secondary" className="w-full">
            Back To Job
          </Button>
        </Link>
      </div>

      <div className="mt-5"></div>
    </div>
  );
};

export default JobPage;
