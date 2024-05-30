import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {

  const {courseId,} = useParams();
  // console.log(courseId);
  
  const course = coursesData.find((c)=>c.id==courseId);
  // console.log(course);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to="/courses">
          <h2 className={style.back}>{"<<"}</h2>
        </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
              {course.chapters.map((chap,i)=>{
                return <div className={style.chapterId} key={i}>
                          <Link to={`chapter/${chap.chapter}`}>{chap.title}</Link>
                      </div>
              })}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        <Outlet context={{...course}}/>
        {/* // OR pass as an object {{x:{...course}}} */}
      </div>
    </div>
</div>
  );
}

export default Learn;
