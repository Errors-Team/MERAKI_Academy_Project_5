/** @format */

import { Link } from "react-router-dom";
import "./navbar.css";
import { logOut } from "../../reducer/login/index";
import { useSelector, useDispatch } from "react-redux";

//
import { GrUser } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
//
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const popupLogout =()=>{

  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    // title: 'Custom width, padding, color, background.',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Logout!',
        'You have been logged out !.',
        'success'
      )
    }
  })


}
const NavBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });

  return (
    <>
      <div className="NavBar">
        <div className="Link">
          <h2>
            {isLoggedIn ? (
              <>
                {/* <Link to="/paginate" style={{ textDecoration: "none" }}>
                   pag
                </Link> */}
                <Link to="/homePage" style={{ textDecoration: "none" }}>
                  <AiOutlineFundProjectionScreen /> HOME
                </Link>
                {/* <Link to="/feedback" style={{ textDecoration: "none" }}>FEEDBACK
                </Link> */}
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <AiOutlineShoppingCart /> CART
                </Link>
                <Link to="/wishlist" style={{ textDecoration: "none" }}>
                  <AiOutlineOrderedList /> WISHLIST
                </Link>

                <Link
                  to="/homePage"
                  className="logout"
                  onClick={(e) => {
                    popupLogout()

                    dispatch(logOut());
                    localStorage.clear();
                  }}>
                  <BiLogOut /> LOGOUT
                </Link>
              </>
            ) : (
              <>
                <Link to="/homePage" style={{ textDecoration: "none" }}>
                  <AiOutlineFundProjectionScreen /> HOME
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <AiOutlineUserAdd /> REGISTER{" "}
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <BiLogIn /> LOGIN
                </Link>
              </>
            )}
            {/* <Link to="/adminPanel" style={{ textDecoration: "none" }}>
              ADMIN
            </Link> */}
          </h2>
        </div>
      </div>
    </>
  );
};

export default NavBar;
