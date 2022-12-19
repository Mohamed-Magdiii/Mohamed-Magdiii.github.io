import React from "react";
import NavbarTwo from "../components/_App/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Pagination from "../components/Common/Pagination";
import Footer from "../components/_App/Footer";
import Index from "./index15";

const Team = () => {
  const teams = [
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "Denial Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
    {
      name: "ahmed Vetori",
      title: "Team Lead",
      image: "/images/team/team1.jpg",
    },
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const teamsPerPage = 6;
  const indexOfLastmemb = currentPage * teamsPerPage;
  const indexOfFirstPage = indexOfLastmemb - teamsPerPage;
  const currentMember = teams.slice(indexOfFirstPage, indexOfLastmemb);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <div className="team-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
          </div>

          <div className="row">
            {currentMember.map((team, Index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={Index}>
                <div className="single-team">
                  <div className="image">
                    <img src={team.image} alt="image" />

                   
                  </div>

                  <div className="content">
                    <h3>{team.name}</h3>
                    <span>{team.title}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-12">
              {/* Pagination */}
              <Pagination
                totalData={teams.length}
                dataPerPage={teamsPerPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
