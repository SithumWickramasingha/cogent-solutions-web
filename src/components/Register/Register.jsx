
import { useState } from "react";
import axios from "axios";
import backgoroundImage from "../../assets/register-background.png";

const Register = ({registerRef}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    try {
      await axios.post("http://172.20.10.4:5001/api/register", formData);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Error submitting the form.");
    }
  };

  return (
    <section ref={registerRef} className="relative min-h-screen flex items-center justify-center py-16 px-4">
      <div className="absolute -z-10 w-full h-full top-0 left-0">
        <img src={backgoroundImage} alt="backgroundImage" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-md w-full bg-black/60 backdrop-blur-md rounded-xl p-8 shadow-xl border border-gray-700/50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent mb-2">Register Now</h1>
          <p className="text-gray-300">Join us for an unforgettable experience!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Job Title"
                required
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
              />
            </div>

            <div className="relative group">
              <input
                type="text"
                placeholder="Company"
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
              />
            </div>
          </div>

          <div className="relative group">
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
            />
          </div>

          <div className="relative group">
            <input
              type="text"
              placeholder="Company Website URL"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg border border-gray-700 outline-none focus:border-[#00a6ff] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,166,255,0.5)]"
            />
          </div>

          <div className="flex items-start space-x-3 py-2">
            <input
              type="checkbox"
              id="privacy-policy"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-4 h-4 mt-1 accent-[#00a6ff] cursor-pointer"
            />
            <label htmlFor="privacy-policy" className="text-sm text-gray-300">
              By filling out the registration form to attend our event, you agree and consent to <a href="#" className="text-[#00a6ff] hover:text-[#89A1FF] transition-colors underline">Cogent Solutions Privacy Policy.</a>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="relative 
                 w-full
                 overflow-hidden
                 h-[50px]
                 rounded-[10px]
                 bg-gradient-to-r from-[#FF8BD8] to-[#89A1FF]
                 text-white font-semibold
                 shadow-[0_5px_15px_rgba(137,161,255,0.5)]
                 hover:shadow-[0_8px_25px_rgba(137,161,255,0.8)]
                 transform hover:-translate-y-1
                 transition-all duration-300 ease-in-out
                 cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
