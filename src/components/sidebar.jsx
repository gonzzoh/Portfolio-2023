import chad from "../images/chad1-chad.gif"

export default function SideBar() {
  return (
    <section id="sideBar">
      <div class="sideBarContent">
        <span class="imageWrapper">
          <img src={chad} placeholder="hihihi" class="profileImg" />
        </span>
        {/* <h2 class="nameTitle">Gonzalo Meza-Cabrera</h2> */}
        <section id="scrollOptions">
          <a href="#landingContainer" className="sidebarLink">Home</a>
          <a href="#skillsContainer" className="sidebarLink">Skills</a>
          <a href="#portfolio" className="sidebarLink">Portfolio</a>
          <a href="#resume" className="sidebarLink">Resume</a>
        </section>
      </div>
    </section>
  );
}