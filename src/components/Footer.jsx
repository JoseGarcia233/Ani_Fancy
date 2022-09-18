import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      
      <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="#/">Web design</Link></li>
                            <li><Link to="#/">Development</Link></li>
                            <li><Link to="#/">Hosting</Link></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="#/">Company</Link></li>
                            <li><Link to="#/">Team</Link></li>
                            <li><Link to="#/">Careers</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><Link to="#/"><i class="icon ion-social-facebook"></i></Link><Link href="#/"><i class="icon ion-social-twitter"></i></Link><Link to="#/"><i class="icon ion-social-snapchat"></i></Link><Link to="#/"><i class="icon ion-social-instagram"></i></Link></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
    </div>
  )
}
