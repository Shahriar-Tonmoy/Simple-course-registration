import Course from "../Course/Course";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const Courses = ({courseAddingHandler}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {
        courses.map(course =>
            <Course 
              key={course.id} 
              course={course} 
              courseAddingHandler={courseAddingHandler} 
            ></Course>        
        )
      }
    </div>
  );
};

Courses.propTypes = {
  courseAddingHandler: PropTypes.func
}
export default Courses;
