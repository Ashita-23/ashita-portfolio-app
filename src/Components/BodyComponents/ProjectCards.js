import React from "react";

const ProjectCards = () => {
  return (
    <>
      <div className="pro-card-outer">
        <figure className="pro-img-holder">
          <img className="pro-img" src="#pro" alt="project_img" />
        </figure>
        <details className="pro-detail-box">
          <summary className="pro-heading"></summary>
          <p className="pro-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id debitis
            vero asperiores voluptate delectus, fuga iusto suscipit, ipsam
            incidunt adipisci alias. Cum dicta nam commodi.
          </p>
          <button><a href="#prolink">veiw</a></button>
        </details>
      </div>
    </>
  );
};

export default ProjectCards
