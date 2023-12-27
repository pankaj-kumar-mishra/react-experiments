import React, { useState } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const ProgressBarExample = () => {
  const [percent, setPercent] = useState(0);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://guillaumeduclos.fr/jd-portfolio/wp-json/wp/v2/posts",
        // "https:jsonplaceholder.typicode.com/posts",
        {
          onDownloadProgress: (progressEvent) => {
            // Way 1
            // const total = progressEvent.total || 1;
            // const percentCompleted = Math.round(
            //   (progressEvent.loaded * 100) / total
            // );

            // const increment = 100;
            // if (percent + increment <= percentCompleted) {
            //   setPercent(percent + increment);
            // } else {
            //   setPercent(percentCompleted);
            // }

            // Way 2 (best one but total is returning undefined)
            // const progress = Math.round(
            //   (progressEvent.loaded / progressEvent.total) * 100
            // );
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            console.log(`Download Progress: ${progress}%`);
            setPercent(progress);

            // Common
            if (progress === 100) {
              setPercent(0);
            }
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Progress Bar Example</h3>
      <ProgressBar percent={percent} />
      <button onClick={handleClick}>Click To Fetch Posts</button>
    </div>
  );
};

export default ProgressBarExample;
