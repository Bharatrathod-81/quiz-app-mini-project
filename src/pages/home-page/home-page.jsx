import "./home-page.css";

const Home = () => {

    return(
        <div className="home-container jstfy-centre align-centre flex-column jstfy-spce-around">
            <h1 className="home-heading">Quiz on Programming Language</h1>
            <div className="card-container jstfy-centre align-centre margin-Xsmall">
                <div className="cards margin-Xsmall">
                    <img className="program-img" src="/images/javaScript-icon.png" alt="react img"/>
                    <p className="card-text">I don't play this odds, I play the man</p>
                    <small className="card-text">Take this quiz to test yourself!</small>
                    <small className="card-text">5 Question</small>
                </div>
                <div className="cards margin-Xsmall">
                    <img className="program-img" src="/images/react-icon.jpg" alt="react img"/>
                    <p className="card-text">I don't play this odds, I play the man</p>
                    <small className="card-text">Take this quiz to test yourself!</small>
                    <small className="card-text">5 Question</small>
                </div>
            </div>
        </div>
    )
}

export default Home ; 