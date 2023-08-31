import React, { useState, useEffect, useRef } from "react";

function UploadWidget() {
  const [picture, setPicture] = useState("");
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "di3nk6hyq",
        uploadPreset: "l3a5wnco",
      },
      function (error, result) {
        if (!error && result && result.info && result.info.secure_url) {
          console.log(result.info.secure_url);
          setPicture(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      {picture && <img src={picture} alt="Uploaded" />}
    </div>
  );
}

export default UploadWidget;
