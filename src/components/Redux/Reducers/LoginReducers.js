// import { ADD_USER_INFO } from "./../Actions/LoginActions";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./../Actions/LoginActions";
import course1 from "../../../images/Courses/AI.png";
import course2 from "../../../images/Courses/paython.png";
import course3 from "../../../images/Courses/physics1.jpg";
import course4 from "../../../images/Courses/IOT1.png";
import course5 from "../../../images/Courses/english.png";
import course6 from "../../../images/Courses/web.jpg";

const intialState = {
  cart: [],
  courses: [
    {
      name: "Artificial Intilegence",
      photo: course1,
      id: 1,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
    {
      name: "Python",
      photo: course2,
      id: 2,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
    {
      name: "Physics",
      photo: course3,
      id: 3,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
    {
      name: "Internet of thing",
      photo: course4,
      id: 4,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
    {
      name: "English",
      photo: course5,
      id: 5,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
    {
      name: "Web Development",
      photo: course6,
      id: 6,
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, velit? ",
    },
  ],
};

const LoginReducers = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      const newItem = {
        courseId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default LoginReducers;
