import React from "react";
import Stats from "@/components/media/Stats";
import Header from "@/components/media/Header";
import UploadMedia from "@/components/media/UploadMedia";
import MediaLibrary from "@/components/media/MediaLibrary";

function MediaPaga() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Media Paga</h1>
        <div>
          <Header />
          <Stats />
          <MediaLibrary />
        </div>
      </div>
    </>
  );
}

export default MediaPaga;
