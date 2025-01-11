
const socials = document.querySelector(".socials");
const shareButton = document.querySelector("#shareButton");
const profileDetails = document.querySelector("#profile-details");

shareButton.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if (window.matchMedia("(max-width: 450px)").matches) {
            showSocials();

    } else {
        showSocialsBig()
    }
});
// Socials Function for a small screen
function showSocials() {
  socials.innerHTML = `<div class="social-links">
              <h3>SHARE</h3>
              <img src="./images/icon-facebook.svg" alt="icon-facebook"><img src="./images/icon-pinterest.svg" alt="icon-pinterest"><img src="./images/icon-twitter.svg" alt="icon-twitter">
            </div>
                        <div id="share">
              <button id="shareButton">
                <img src="./images/icon-share.svg" alt="Share" />
              </button>
            </div>`;

  socials.style.backgroundColor = "var(--VeryDarkGrayishBlue)";
  socials.style.borderRadius = "0 0 10px 10px";

}

// Socials Function for a big screen

function showSocialsBig() {
    socials.innerHTML = `
    <div id="profile-details">
          <div id="profile">
            <img src="./images/avatar-michelle.jpg" alt="avatar" width="40px" />
          </div>

          <div id="details">
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
          </div>
        </div>
    <div class="social-links">
              <h3>SHARE</h3>
              <img src="./images/icon-facebook.svg" alt="icon-facebook"><img src="./images/icon-pinterest.svg" alt="icon-pinterest"><img src="./images/icon-twitter.svg" alt="icon-twitter">
            </div>
            <div id="share">
          <button id="shareButton">
            <img src="./images/icon-share.svg" alt="Share" />
          </button>
        </div>`;
    const socialLinks = document.querySelector('.social-links');
  socialLinks.style.display = "flex";
  console.log(shareButton);
  
}