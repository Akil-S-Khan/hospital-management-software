import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-color">
      {/* Container 1 */}
      <div>
        <h3>{title}</h3>
      </div>

      {/* Container 2 */}
      <div className="d-flex  align-items-center ">
        <div className="me-3">
          <IoIosNotifications size={30} />
        </div>
        <div className="d-flex  align-items-center">
          <MdAccountCircle size={40} />
          <div className="ms-2">
            <div>Akil Khan</div>
            <div>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
