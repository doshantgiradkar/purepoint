import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Report = () => {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Report a Garbage Issue</h1>
          <p className="text-lg">Fill out the details and submit your complaint.</p>
        </div>
      </SignedIn>
    </>
  );
};

export default Report;
