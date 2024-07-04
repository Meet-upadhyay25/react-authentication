import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAvatar from "../hooks/useAvatar";
import useCurrenUser from "../hooks/useCurrentUser";
import useChangePassword from "../hooks/useChangePassword";

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
  useCurrenUser(isFetching);
  const { changePassword: changePasswords } = useChangePassword();

  const handleUpload = async () => {
    try {
      await uploadAvatar(file);
      setIsFetching(true);
    } catch (error) {
      setIsFetching(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    await changePasswords({
      newPassword: password.newPassword,
      oldPassword: password.oldPassword,
    });
  };

  return (
    <section className="p-6">
      <h1 className="text-center mb-5">
        Welcome to User Profile <span>{user.username}</span>
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
      <div className="mt-5">
        <span>ChangePassword</span>
        <button
          className="border border-red-500"
          onClick={() => setChangePassword(!changePassword)}
        >
          ClickHere
        </button>
      </div>
      {changePassword && (
        <div>
          <form onSubmit={handleChangePassword}>
            <div>
              <label>old Password</label>
              <input
                value={password.oldPassword}
                onChange={(e) =>
                  setPassword({ ...password, oldPassword: e.target.value })
                }
                type="password"
                placeholder="old Password"
              />
            </div>
            <div>
              <label>New Password</label>
              <input
                value={password.newPassword}
                onChange={(e) =>
                  setPassword({ ...password, newPassword: e.target.value })
                }
                type="password"
                placeholder="new Password"
              />
            </div>
            <button type="submit">ChangePassword</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default User;
