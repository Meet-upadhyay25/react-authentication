import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAvatar from "../hooks/useAvatar";
import useCurrenUser from "../hooks/useCurrentUser";

const User = () => {
  const [file, setFile] = useState(null);
  const { avatar: uploadAvatar } = useAvatar();
  // console.log(file);
  const handleUpload = async () => {
    await uploadAvatar(file);
  };

  return (
    <section className="p-6">
      <h1 className="text-center mb-5">
        Welcome to User Profile <span>{}</span>
      </h1>
      <div>
        <div>
          <h1 className="text-xl text-slate-900 font-bold">
            Upload Profile Picture
          </h1>
          <div className="mt-5">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            {file && (
              <button type="submit" onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
