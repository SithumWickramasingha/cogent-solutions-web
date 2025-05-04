import award1 from "../../assets/award1.png"
import award2 from "../../assets/award2.png"
import award3 from "../../assets/award3.png"
import award4 from "../../assets/award4.png"
import location from "../../assets/location.png"
import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/insta.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"

const Footer = () => {
  return(
    <section className="bg-black text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent">CogentSolutions</h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
              Through our conferences we transform your business challenges into opportunities. Our clients and customers are leading government entities and the fortune 500 companies.
            </p>
            
            {/* Awards */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Awards</h3>
              <div className="flex flex-row flex-wrap gap-4">
                <img src={award1} alt="award" className="h-12 w-auto filter brightness-0 invert hover:brightness-110 transition-all duration-300" />
                <img src={award2} alt="award" className="h-12 w-auto filter brightness-0 invert hover:brightness-110 transition-all duration-300" />
                <img src={award3} alt="award" className="h-12 w-auto filter brightness-0 invert hover:brightness-110 transition-all duration-300" />
                <img src={award4} alt="award" className="h-12 w-auto filter brightness-0 invert hover:brightness-110 transition-all duration-300" />
              </div>
            </div>
          </div>
          
          {/* Office Locations */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent">Our Office</h2>
            
            <div className="space-y-6">
              {/* Office 1 */}
              <div className="flex items-start gap-3">
                <img src={location} alt="locationIcon" className="w-5 h-5 mt-1 filter brightness-0 invert" />
                <p className="text-gray-300">
                  Middle East & Africa HQ Office No: 209, The Metropolis Tower Business Bay, Dubai, United Arab Emirates
                </p>
              </div>
              
              {/* Office 2 */}
              <div className="flex items-start gap-3">
                <img src={location} alt="locationIcon" className="w-5 h-5 mt-1 filter brightness-0 invert" />
                <p className="text-gray-300">
                  Asia Pacific HQ 7th floor Green Lanka Tower, Colombo Sri Lanka
                </p>
              </div>
              
              {/* Office 3 */}
              <div className="flex items-start gap-3">
                <img src={location} alt="locationIcon" className="w-5 h-5 mt-1 filter brightness-0 invert" />
                <p className="text-gray-300">
                  Saudi Arabia HQ Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent">Contact Us</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <img src={phone} alt="phoneIcon" className="w-5 h-5 filter brightness-0 invert group-hover:scale-110 transition-all duration-300" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+94 722859410</p>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3 group">
                <img src={email} alt="emailIcon" className="w-5 h-5 filter brightness-0 invert group-hover:scale-110 transition-all duration-300" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  partnerships@cogentsolutions.ae
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Follow Us</h3>
                <div className="flex flex-row gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8BD8] hover:to-[#89A1FF] transition-all duration-300">
                    <img src={linkedin} alt="linkedinIcon" className="w-5 h-5 filter brightness-0 invert" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8BD8] hover:to-[#89A1FF] transition-all duration-300">
                    <img src={facebook} alt="facebookIcon" className="w-5 h-5 filter brightness-0 invert" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8BD8] hover:to-[#89A1FF] transition-all duration-300">
                    <img src={insta} alt="instaIcon" className="w-5 h-5 filter brightness-0 invert" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8BD8] hover:to-[#89A1FF] transition-all duration-300">
                    <img src={twitter} alt="twitterIcon" className="w-5 h-5 filter brightness-0 invert" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
          </p>
          <div className="flex flex-row gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;