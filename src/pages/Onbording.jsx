import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onbording = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleRoleSelection = async(role) => {
    await user.update({
      unsafeMetadata: { role  },
    }).then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
    }).catch((error) => {
        console.error("Error updating user metadata:", error);
    });
  }

  useEffect( () => {
    if(user?.unsafeMetadata?.role){
      navigate(user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs");
    }
  },[user]);


  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#454545" />;
  }

  

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-35">
        <h2 className="gradient-title font-extrabold text-7xl tracking-tighter">
          I am a ...
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40 ">
        <Button
          variant="blue"
          className="h-25 text-3xl"
          onClick={ () => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="destructive"
          className="h-25 text-3xl"
          onClick={()=>handleRoleSelection("recruiter")}
        >
          Recurtier
        </Button>
      </div>
    </>
  );
};

export default Onbording;
