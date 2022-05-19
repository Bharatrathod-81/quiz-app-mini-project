import "./nav-bar.css";

const NavBar = () => {

    return(
        <div className="nav-body jstfy-spce-btwn align-centre">
            <h1 className="logo margin-small">Quizy Quiz</h1>
             <div className="login-icon-container jstfy-spce-btwn">
                <button className="login-Btn margin-small">LOGIN</button>
                <div className="profile-icon margin-small"><i className="fa fa-user-circle-o"></i></div>
             </div>
        </div>
    );
};

export default NavBar ;