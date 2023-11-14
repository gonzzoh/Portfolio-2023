import chad from "../images/chad1-chad.gif"

export default function SideBar() {
  return (
    <section id="sideBar">
      <div class="nameTitleContainer">
        <span class="imageWrapper">
          <img src={chad} placeholder="hihihi" class="profileImg" />
        </span>
        <h2>Gonzalo Meza-Cabrera</h2>
      </div>
    </section>
  );
}