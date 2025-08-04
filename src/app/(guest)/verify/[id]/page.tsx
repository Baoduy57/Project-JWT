import Verify from "@/components/auth/verify";
import React from "react";

const VerifyPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <Verify id={id} />
    </div>
  );
};

export default VerifyPage;
