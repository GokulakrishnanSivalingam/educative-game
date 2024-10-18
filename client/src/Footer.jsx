import { useState } from 'react'
import './Footer.css'
function Footer(){
    return (<>
    <div>
    <footer>
  <div class="footer-container">
    <div class="footer-section logo">
      <h1>AVLEARN</h1>
      <p>Elegance meets excellence. Discover the difference with us.</p>
      <div class="socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div class="footer-section newsletter">
      <h2>Newsletter</h2>
      <p>Subscribe to our newsletter to stay updated on our latest news and offers.</p>

    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 AVLearn. All rights reserved.</p>
  </div>
</footer>
    </div>
    </>)

}
export default Footer; 
