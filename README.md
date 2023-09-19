Project Features:  

    1. This is a course registration website. So, there is a courses container where all courses are showed.  

    2. Every course has a select button, by clicking this button that particular course will be added to the cart which is situated at the right side of courses container.  
    

    3. User can add a course one time, if he wants to add it multiple times, then a toast will be triggered which will show "This course is already added". Also, user can't take more than 20 hr of courses.  


State Management in this project :  
 
    1. First of all I fetched all data from a json file where I have 9 fake data about courses. So, after loading all data I needed to show them in my page. That's why I declared a state called 'courses' , then I set them by a function called 'setCourses'. Then I applied map function on 'courses', and passed objects in the "course component" one by one. By doing this, I created courses container.  

    2. To make a feature where user will click SELECT button, then all data about the selected course will be passed to another component called "cart", I needed to handle the state of "cart" component. but the button was in the "courses" container. so, I needed to declare the state and the handler function in the parent (app.jsx). then I was able to pass the state through the props to the component called "cart". In this way I managed the state for this feature. 
