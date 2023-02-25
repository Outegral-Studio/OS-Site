import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/carousel.css";
import "./js/script.js";

const MainArticle = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(i18n);
    };

    return (
        <div>
            <div className="preloader"></div>

            <nav id="main-navbar" className="navbar navbar-expand-lg fixed-top" data-spy="affix">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./favicon.svg" className="brand-img" alt="icon" />
                    </a>
                    <nav className="nav">

                    </nav>
                    <div className="d-flex">
                        <button type="button" className="btn btn-svg" onclick="i18n.changeLanguage('en')">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                        </button>
                        <button type="button" className="btn btn-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                        </button>
                        <button type="button" className="btn btn-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="main-layout">

                <header className="main-header container-fluid">
                    <div id="carouselHeader" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000" data-bs-pause="false">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <a href="#">
                                        <img src="./assets/gallery/hcts-20191214.jpg" className="d-block" alt="Taiwan Hsinchu Train Station" />
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <a href="#">
                                        <img src="./assets/gallery/project-abc.png" className="d-block" alt="Project ABC for Shirose Aoi" />
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <a href="#">
                                        <img src="./assets/gallery/mc-loop-anim.png" className="d-block" alt="MC Loop Animation" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="studio p-5">
                        <h1 className="heading text-uppercase text-shadow">Outegral Studio</h1>
                        <span className="subheading text-shadow mt-3">"Every outegral is INF."</span>
                    </div>
                </header>

                <main className="container px-5">                    
                    <div className="main-article">
                        <section id="aboutUs">
                            <h2 className="title"> {t("aboutUs")} </h2>
                            <p>
                                {t("aboutUs_p1")} <br></br>
                                {t("aboutUs_p2")} <br></br>
                                {t("aboutUs_p3")} <br></br>
                            </p>
                        </section>

                        <section id="origin">
                            <h2 className="title">{t("origin")}</h2>
                            <p>
                                {t("origin_p1")} <br></br>
                                <span className="blockquote p-4">Every outegral is infinity.</span> <br></br>
                                {t("origin_p2")}
                                <span className="hover-img">
                                    <a href="#origin">Outegral, I choose you!
                                        <span className="drop-shadow"> <img src="/assets/meme/meme_icu.jpg" alt="Meme of I choose you" /> </span>
                                    </a> <br></br>
                                </span>
                            </p>
                        </section>

                        <section id="service">
                            <h2 className="title">{t("service")}</h2>
                            <p>{t("service_p")}</p>
                        </section>
                    </div>
                </main>

                <footer className="main-footer text-center drop-shadow">
                    <div className="container p-4">
                        <section className="">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <ul className="list-unstyled mb-1">
                                        <li>
                                            <a href="https://www.youtube.com/@outegralstudio" className="footer-item">YouTube</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="footer-item">© 2023 Outegral Studio</div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </div>
    );
};

function App() {
    return (
        <Suspense fallback="loading">
            <MainArticle />
        </Suspense>
    );
};

export default App;