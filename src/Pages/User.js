import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAvatar from "../hooks/useAvatar";
import useCurrenUser from "../hooks/useCurrentUser";
import useChangePassword from "../hooks/useChangePassword";
import useEmailVerified from "../hooks/useEmailVerified";

const User = () => {
  const [file, setFile] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const user = useSelector((store) => store.user.user);
  const { avatar: uploadAvatar } = useAvatar();
  const { currentUser } = useCurrenUser();
  const { changePassword: changePasswords } = useChangePassword();
  const { emailVerified } = useEmailVerified();

  if (isFetching) {
    currentUser();
  }

  const handleUpload = async () => {
    try {
      await uploadAvatar(file);
      setIsFetching(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    await changePasswords({
      newPassword: password.newPassword,
      oldPassword: password.oldPassword,
    });
    setChangePassword(false);
  };

  const handleVerifyEmail = async () => {
    await emailVerified();
  };

  if (!user) return null;

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-5">
        Welcome to User Profile, <span>{user.username}</span>
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-xl text-slate-900 font-bold mb-4">
            Upload Profile Picture
          </h2>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border border-gray-300 p-2 rounded"
            />
            {file && (
              <button
                type="button"
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Upload
              </button>
            )}
          </div>
        </div>
        <div className="mb-6">
          <span className="block text-lg font-semibold mb-2">Change Password</span>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setChangePassword(!changePassword)}
          >
            Click Here
          </button>
        </div>
        {changePassword && (
          <div className="mb-6">
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Old Password</label>
                <input
                  value={password.oldPassword}
                  onChange={(e) =>
                    setPassword({ ...password, oldPassword: e.target.value })
                  }
                  type="password"
                  placeholder="Old Password"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  value={password.newPassword}
                  onChange={(e) =>
                    setPassword({ ...password, newPassword: e.target.value })
                  }
                  type="password"
                  placeholder="New Password"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Change Password
              </button>
            </form>
          </div>
        )}
        <div>
          <button
            onClick={handleVerifyEmail}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Verify Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default User;
