import { useState } from 'react';

const StepFour = ({ setFiles }) => {
  const [docs, setDocs] = useState([]);

  const onChange = (e) => {
    const file = e.target.files[0];
    setFiles((prev) => [...prev, file]);
    setDocs((prev) => [...prev, file]);
  };

  const onRemove = (index) => {
    const updatedFiles = [...docs];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setDocs(updatedFiles);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8 mb-10">
      <div>
        <h2>Document Upload Section</h2>
        <h4 className="text-xl font-bold my-4">
          Please make sure to upload the following documents:
        </h4>
        <ul className="ml-9 space-y-3 font-semibold list-disc">
          <li>Recent Photograph(3x4cm)</li>
          <li>
            Scanned Official Diplomas & Transcripts for all educational
            background you stated in the application
          </li>
          <li>Church Recommendation/Reference</li>
          <li>Biographical Sketch (Testimonial)</li>
          <li>Application Fee Recipt</li>
        </ul>
      </div>
      <div className="col-span-2">
        <div className="my-6">
          <p className="mb-3 font-semibold">
            Click on the button below to start uploading your files
          </p>
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            Select file to upload
            <input
              id="file-upload"
              type="file"
              className="hidden"
              multiple={false}
              onChange={onChange}
            />
          </label>
        </div>
        <h4 className="text-xl font-bold mb-4">Uploaded Documents Preview</h4>
        <div className="grid grid-cols-3 gap-4">
          {docs.map((file, index) => (
            <div key={index} className="border p-3 rounded">
              <p className="text-sm">{file.name}</p>
              <p
                onClick={() => onRemove(index)}
                className="mt-3 bg-red-500 p-2 w-20 rounded-md text-center text-white hover:bg-red-300 cursor-pointer"
              >
                Remove
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepFour;
