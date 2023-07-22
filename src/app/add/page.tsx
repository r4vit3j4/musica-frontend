"use client";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const AddTrack = () => {
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target?.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("track", file);
      const response = await axios.post(
        "http://localhost:3001/api/v1/track",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  };

  return (
    <div className="container p-4 border-x min-h-[100svh] py-20 flex">
      <div className="flex flex-1 justify-center items-center gap-4">
        <p className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Coming Soon...
        </p>
        {/* <Input
          name="track"
          type="file"
          className="hover:cursor-pointer file:hover:cursor-pointer max-w-xs"
          onChange={handleChange}
        />
        <Button onClick={handleUpload}>Upload files</Button> */}
      </div>
    </div>
  );
};

export default AddTrack;
