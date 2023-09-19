import PropTypes from "prop-types";
import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

const Course = ({ course, courseAddingHandler }) => {
  const { course_name, image, credit, price, details } = course;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl p-4">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <h2 className="text-lg font-semibold mt-4 mb-3">{course_name}</h2>
        <p className="text-sm font-normal text-[#1c1b1b99] mb-5">{details}</p>
        <div className="flex gap-14 mb-7">
          <div className="flex items-center gap-3">
            <FiDollarSign></FiDollarSign>
            <p className="text-base font-medium text-[#1c1b1b99]">
              Price :{price}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <BsBook></BsBook>
            <p className="text-base font-medium text-[#1c1b1b99]">
              Credit :{credit}hr
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button onClick={()=>(courseAddingHandler(course))} className="btn btn-primary w-full bg-[#2F80ED] border-0 hover:bg-[#5993df] text-[#FFF]">Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  courseAddingHandler: PropTypes.func
};

export default Course;
