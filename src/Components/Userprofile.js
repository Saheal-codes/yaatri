import PrimarySearchAppBar from "./Bar";

const Userprofile = (props) => {
  return (
    <>
      <PrimarySearchAppBar color="white" />
      <div className="userprofile">
        <div className="userprofile__header">
          <div className="userprofile__header__title">
            <h1>User Profile</h1>
          </div>
          <div className="userprofile__header__actions">
            <button className="button button--primary">
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
        <div className="userprofile__body">
          <div className="userprofile__body__avatar">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="avatar"
            />
          </div>
          <div className="userprofile__body__info">
            <div className="userprofile__body__info__name">
              <h2>John Doe</h2>
            </div>
            <div className="userprofile__body__info__email">
              <p>
                <span>Email:</span>
                <span>
                  <a href="mailto:" className="link" />
                </span>
              </p>
            </div>
            <div className="userprofile__body__info__phone">
              <p>
                <span>Phone:</span>
                <span>
                  <a href="tel:" className="link" />
                </span>
              </p>
            </div>
            <div className="userprofile__body__info__address">
              <p>
                <span>Address:</span>
                <span>
                  <a href="mailto:" className="link" />
                </span>
              </p>
            </div>
            <div className="userprofile__body__info__birthday">
              <p>
                <span>Birthday:</span>
                <span></span>
              </p>
            </div>
            <div className="userprofile__body__info__"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
