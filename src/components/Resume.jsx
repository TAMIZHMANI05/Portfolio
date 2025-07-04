import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/Resume/Tamizh_Resume_Without_Logo.pdf";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess() {
    setIsLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
    setIsLoading(false);
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Tamizhmani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white flex items-center justify-center flex-col">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 bg-fuchsia-500 px-4 py-2 rounded-md cursor-pointer hover:bg-fuchsia-600 transition-colors duration-300"
        >
          <FaDownload />
          Download Resume
        </button>

        <div className="mt-10 w-full max-w-2xl">
          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center h-[800px] bg-gray-800 rounded-lg">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-fuchsia-500"></div>
            </div>
          )}

          {/* PDF Document */}
          <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex justify-center items-center h-[800px] bg-gray-800 rounded-lg">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-fuchsia-500"></div>
              </div>
            }
            className="flex flex-col items-center"
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="max-w-full shadow-xl rounded-lg overflow-hidden"
              scale={1.2}
            />
          </Document>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm -z-10"></div>
    </div>
  );
};

export default Resume;
