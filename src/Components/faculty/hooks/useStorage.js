import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../gallery/firebase/config";

const useStorage = (file, category, qualification, facultyname) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  // console.log(file, category);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("faculty_details");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({
          url,
          createdAt,
          facultyname: facultyname,
          category: category,
          qualification: qualification,
        });
        setUrl(url);
      }
    );
  }, [file, category,facultyname,qualification]);

  return { progress, url, error, category, qualification,facultyname };
};

export default useStorage;
