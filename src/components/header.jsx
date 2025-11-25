import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import { BriefcaseBusinessIcon, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [serach, setSearch] = useSearchParams();
  const {user} = useUser();

  useEffect(() => {
    if (serach.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [serach]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className=" flex justify-between items-center ">
        <Link to="/">
          <img src="/JobPortalLogo.png" alt="Logo" className="h-30" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button
              variant="outline"
              onClick={() => {
                setShowSignIn(true);
              }}
            >
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" &&(
              <Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} />
                Post a Job
              </Button>
            </Link>)}
            <UserButton
              router="react-router-dom"
              appearance={{
                elements: {
                  avatarBox: "w-20 h-20",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  href="/my-jobs"
                  label="My Jobs"
                  labelIcon={<BriefcaseBusinessIcon size={16} />}
                />

                <UserButton.Link
                  href="/saved-jobs"
                  label="Saved Jobs"
                  labelIcon={<Heart size={16} />}
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onbording"
            fallbackRedirectUrl="/onbording"
          />
        </div>
      )}
    </>
  );
};

export default Header;
