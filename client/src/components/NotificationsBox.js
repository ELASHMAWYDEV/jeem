//Style
import "../styles/NotificationBox.scss";

const NotificationsBox = ({ active }) => {
  return (
    <div className={`notification-box-container ${active ? "active" : ""}`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
        <div className="notification-item" key={i}>
          <h3 className="notification-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          </h3>
          <h6 className="notification-date">10/7/2020 2:00 pm</h6>
        </div>
      ))}
    </div>
  );
};

export default NotificationsBox;
