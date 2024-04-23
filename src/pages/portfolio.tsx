import React, { useEffect } from 'react';
import Header from "../app/components/Header"

const projects = [
  {
    id: "vgmhub",
    name: "vgmhub.com",
    imageCount: 5, // including cover
    languages: "React | AWS | MongoDB",
    description: "VGMHub is a website for video game soundtrack enthusiasts. Users can contribute to the library, listen to soundtracks, like songs / albums / games, and create mixes. Despite resembling a music service, it utilizes YouTube iframes in the background.",
    demoLink: "https://www.vgmhub.com",
    repoLink: undefined,
    folderName: "p7",
    cover: "p7.jpg"
  },
  {
    id: "iptv",
    name: "IPTV Football App",
    imageCount: 2, // including cover
    languages: "Next.js | SASS | Tailwind | MongoDb",
    description: "This app offers a seamless experience for discovering today's football events across numerous channels. With the ability to click on channels and play them directly through VLC Player, you can enjoy faster access to your favorite sport events.",
    demoLink: undefined,
    repoLink: "https://github.com/blackwater17/iptv-football-app",
    folderName: "p9",
    cover: "p9.jpg"
  },
  {
    id: "screenshot-comparison",
    name: "SS Comparison",
    imageCount: 2, // including cover
    languages: "Next.js | SASS | Tailwind",
    description: "This image comparison tool allows users to upload two images and visually compare them side by side. By sliding between the images, users can assess differences and determine which one is better suited for their needs. Ideal for video encoders and anyone looking to compare image quality quickly and efficiently.",
    demoLink: "https://blackwater17.github.io/screenshot-comparison-tool",
    repoLink: "https://github.com/blackwater17/screenshot-comparison-tool",
    folderName: "p8",
    cover: "p8.jpg"
  },
  {
    id: "movie",
    name: "movie-explorer",
    imageCount: 4, // including cover
    languages: "React | Typescript | SCSS",
    description: "A project for movie exploring with TMDB API. You can search for movies, list all movies of actors, see popular movies and filter/sort them.",
    demoLink: "https://blackwater17.github.io/movie-explorer/#/",
    repoLink: "https://github.com/blackwater17/movie-explorer",
    folderName: "p6",
    cover: "p6.avif"
  },
  {
    id: "tekken",
    name: "TekkenPortal",
    imageCount: 7, // including cover
    languages: "React | HTML/SCSS",
    description: "TekkenPortal is a project for TEKKEN 8 players. You can view the character move-lists, animations, inputs, and frame datas of them with a nice UI. This project is still in development process.",
    demoLink: "https://blackwater17.github.io/tekken-portal",
    repoLink: "https://github.com/blackwater17/tekken-portal",
    folderName: "p5",
    cover: "p5.png"
  },
  {
    id: "vn",
    name: "vn-music-organizer",
    imageCount: 4, // including cover
    languages: "React | Node.js | Python | MongoDB",
    description: "vn-music-organizer is a web application that organizes users local music collection. You can browse through your music collection, search for albums/artists, create playlists, and of course you can listen your music. Design is very similar to Deezer's UI, but with some little additions.",
    demoLink: undefined,
    screenshots: "https://imgur.com/a/s261IU0",
    repoLink: "https://github.com/blackwater17/vn-music-organizer",
    folderName: "p1",
    cover: "p1.png"
  },
  {
    id: "auto",
    name: "AutoFUTBuilder",
    imageCount: 6, // including cover
    languages: "Javascript | Node.js | Python | MongoDB",
    description: "AutoFUTbuilder is a web application that builds the best possible FIFA Ultimate Team squads based on user needs. In background it solves a constraint satisfaction problem with back-propagation techniques, and give the output to user after solutions found.",
    demoLink: undefined,
    screenshots: "https://imgur.com/a/NuwQC7A",
    repoLink: "https://github.com/blackwater17/autofutbuilder",
    folderName: "p2",
    cover: "p2.png"
  },
  {
    id: "game",
    name: "game-browser",
    imageCount: 5, // including cover
    languages: "Javascript | RAWG API | HTML & SCSS",
    description: "A simple web application that let users search video games. It uses RAWG API for getting video game infos, and then display the games after results found.",
    demoLink: undefined,
    screenshots: "https://imgur.com/a/rhX0sJp",
    repoLink: "https://github.com/blackwater17/game-browser",
    folderName: "p3",
    cover: "p3.jpg"
  },
  {
    id: "youtube",
    name: "YT-Loop-Between",
    imageCount: 5, // including cover
    languages: "Javascript",
    description: "A chrome extension that let users loop between certain timestamps of a youtube video. It's very useful when users want to loop a music with advertising in beginning/end.",
    demoLink: undefined,
    screenshots: "https://imgur.com/a/qmaJF8p",
    repoLink: "https://github.com/blackwater17/youtube-loop-between",
    folderName: "p4",
    cover: "p4.png"
  },
]

const PortfolioPage: React.FC = () => {

  useEffect(() => {
    projects.forEach((project) => {

      let p_active = 0
      let rightArrowDom = document.querySelector(".right-arrow-" + project.id)
      let leftArrowDom = document.querySelector(".left-arrow-" + project.id)

      rightArrowDom?.addEventListener("click", () => {
        p_active++
        for (let i = 0; i < document.querySelectorAll(".card-" + project.id).length; i++) {
          if (p_active % project.imageCount != i) {
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.visibility = "hidden";
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.opacity = "0";
          }
          else {
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.visibility = "visible";
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.opacity = "1";
          }
        }
      })

      leftArrowDom?.addEventListener("click", () => {
        p_active--

        if (p_active < 0) p_active += project.imageCount // 2

        for (let i = 0; i < document.querySelectorAll(".card-" + project.id).length; i++) {
          if (p_active % project.imageCount != i) {
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.visibility = "hidden";
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.opacity = "0";
          }

          else {
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.visibility = "visible";
            document.querySelectorAll<HTMLElement>(".card-" + project.id)[i].style.opacity = "1";
          }
        }
      })

    })
  }, [])

  return (
    <div>
      <div className="projects-container">
        {projects.map((project, index) =>
          <div key={index} className="project" id={project.id + "-project"}>
            <div className="project-card-container">
              <div className="project-card-front">
                <div className={"front-header " + project.id + "-header"}>{project.name}</div>
                <div
                  className={"front-main-content " + project.id + "-main-content"}
                  style={{ backgroundImage: `url(img/${project.cover})` }}
                ></div>
              </div>
              <div className="project-details">
                <div className={"card card-0 card-" + project.id}>
                  <div className="back-header">
                    <div className="project-name">{project.name}</div>
                    <div className="languages">{project.languages}</div>
                  </div>
                  <div className="project-description">
                    {project.description}
                  </div>
                  {project.demoLink && <a className="view-demo" href={project.demoLink}>View Site</a>}
                  {!project.demoLink && project.screenshots && <a className="view-demo" href={project.screenshots}>Screenshots</a>}
                  {project.repoLink &&
                    <div>
                      <a className="github" href={project.repoLink}>Github</a>
                    </div>
                  }
                </div>

                {Array.from({ length: project.imageCount }, (_, i) => {
                  const cardClassName = `card card-${i + 1} card-${project.id}`;
                  const imageUrl = `img/${project.folderName}_images/${i + 1}.jpg`;
                  return (
                    <div key={i} className={cardClassName} style={{ backgroundImage: `url(${imageUrl})` }}></div>
                  );
                })}

                <div className={"left-arrow arrow left-arrow-" + project.id}>&lt;</div>
                <div className={"right-arrow arrow right-arrow-" + project.id}>&gt;</div>

              </div>
            </div>
          </div>
        )}
      </div>
      <Header />
    </div>
  );
};

export default PortfolioPage;
