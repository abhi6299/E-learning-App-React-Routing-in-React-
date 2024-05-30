import React from "react";
import styles from "./Chapter.module.css";

import { useOutletContext, useParams } from "react-router-dom";
import coursesData from "../../../data/courses.json";

function Chapter() {
  //Method 1
  const {chapterId,courseId}= useParams();
  console.log(chapterId,courseId);

  // const course = coursesData.find((course)=>course.id == courseId);
  // OR
  const course = useOutletContext(); // fetching course using hook
  
  const chapter = course.chapters.find((chap)=>String(chap.chapter)===chapterId);
  console.log(chapter);

  return (
    <div>
      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={`${chapter.video}`}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
