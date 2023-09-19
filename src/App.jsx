import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cart, setCart] = useState([]);
  const [creditHour, setCreditHour]  = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const courseAddingHandler = newCourse=>{
    const { course_name, credit, price } = newCourse;
    const findCourse = cart.find(oldCourse=> oldCourse===course_name)
    const newCreditHour = creditHour + credit;

    if(!findCourse && newCreditHour <= 20){
      const newCart = [...cart, course_name]
      setCart(newCart);

      
      setCreditHour(newCreditHour)

      const newRemainingHour = remainingHour - credit;
      setRemainingHour(newRemainingHour);

      const newTotalPrice = totalPrice + price;
      setTotalPrice(newTotalPrice);
    }
    else if(findCourse){
      toast("This course is already added!")
    }
    else{
      toast('Limit Exceeded (Maximum 20 hours)')
    }

  }

  return (
    <div className="container mx-auto ">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl font-bold text-center m-12">
        Course Registration
      </h1>
      <div className="flex gap-6">
        <div>
          <Courses courseAddingHandler={courseAddingHandler}></Courses>
        </div>
        <div>
          <Cart 
            cart={cart} 
            creditHour={creditHour}
            totalPrice={totalPrice}
            remainingHour={remainingHour}
          ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
