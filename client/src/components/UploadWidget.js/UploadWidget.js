import React from "react";
import { useEffect, useRef } from "react";

function UploadWidget() {
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
        console.log(result.info.secure_url);
      }
    );
  }, []);
  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
}

export default UploadWidget;
