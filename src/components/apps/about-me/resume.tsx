// import React from "react";
import CV from '../../../assets/cv.pdf';
const PdfViewer = () => {
  return (
    <div className="h-full w-full m-0 p-3">
      <h1 className=" text-center text-3xl py-2 font-bold">Resume</h1>

      <object
        className="w-full aspect-[4/3] h-full"
        data={CV}
        type="application/pdf"
        width="800"
        height="500"
      >
        <p>
          Your browser does not support PDFs.{" "}
          <a
            href={CV}
            className="text-blue-600 underline"
          >
            Download the PDF
          </a>
          .
        </p>
      </object>
    </div>
  );
};

export default PdfViewer;
