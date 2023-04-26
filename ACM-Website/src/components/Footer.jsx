
function Footer() {
  return (
    <footer>
      <div className="sponsorship">
        <div className="container">
          <div className="Sponsor-title">
            <h3>Sponsorship:</h3>
          </div>
          <div className="sponsors">
            <h3>Cahsi</h3>
            <h3>ACM</h3>
            <h3>Scholar Academy</h3>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <div className="grandparent">
        <div className="parent" id="parent1">
          <div id="child1" className="child">
            <img src={'/assets/ACM (A) 3.png'} alt="ACM Logo" />
            <p className="slogan">
              Something About the Company!
            </p>
          </div>
        </div>
        <div className="parent">
          <div id="child2" className="child">
            <h3>Contact Us</h3>
            <div className="icon-container">
              <img
                className="icon"
                src="./assets/172517_phone_icon.png"
                alt="phone"
              />
              <p>Phone: +1 0123-456-789</p>
            </div>
            <div className="icon-container">
              <img
                className="icon"
                src="./assets/2674096_object_email_web_essential_icon.png"
                alt="email icon"
              />
              <p>Email: abcd@gmail.com</p>
            </div>
            <div className="icon-container">
              <img
                className="icon"
                src="./assets/4200473_address_location_map_navigation_icon.png"
                alt="address icon"
              />
              <p>Address: 123 Grand St Houston, TX</p>
            </div>
          </div>
        </div>
        <div className="parent">
          <div id="child3" className="child">
            <h3>Follow Us</h3>
            <div class="icon-container">
              <img
                class="icon"
                src="./assets/5279111_network_fb_social media_facebook_facebook logo_icon.png"
                alt="facebook icon"
              />
              <p>Facebook</p>
            </div>
            <div className="icon-container">
              <img
                className="icon"
                src="./assets/5279112_camera_instagram_social media_instagram logo_icon.png"
                alt="instagram icon"
              />
              <p>Instagram</p>
            </div>
            <div className="icon-container">
              <img
                className="icon"
                src="./assets/104461_twitter_icon.png"
                alt="twitter icon"
              />
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="copyright">
          <h3>ACM UHD &copy; 2023</h3>
        </div>
    </footer>
  )
}

export default Footer