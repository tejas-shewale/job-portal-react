import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl text-center pb-8">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : " My Jobs"}
      </h1>

      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}

      <div className="mt-10 mb-10 flex justify-center ">
        <Link to="/jobs" >
          <Button variant="secondary" className="w-60">
            All Jobs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyJobs;
