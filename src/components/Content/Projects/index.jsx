import { useEffect, useState } from "react";
import Project from "../Project";
import styles from "./Projects.module.scss";

function Projects() {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/nevicoder/repos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //     });
  // }, []);
  // return (
  //   <div className={styles.projects}>
  //     <ul>
  //       {projects.map((prj) => (
  //         <Project key={prj.id} prj={prj} />
  //       ))}
  //     </ul>
  //   </div>
  // );
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "High Society Vietnam",
      desc: "My personal blog. All about spirituality & drugs especially psychedelics",
      link: "https://highsocietyvietnam.com",
    },
    {
      id: 1,
      title: "High Society Vietnam Store",
      desc: "My own 420 headshop based in Saigon",
      link: "http://hsvheadshop.com",
    },
    {
      id: 2,
      title: "Beosg Headshop",
      desc: "A small headshop founded by me and my 2 friends, located in Binh Thanh district",
      link:"https://beosgheadshop.com"
    },
  ]);
  return (
    <div className={styles.projects}>
      <ul>
        {projects.map((prj) => (
          <Project key={prj.id} prj={prj} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
