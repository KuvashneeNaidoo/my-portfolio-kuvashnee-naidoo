import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import GithubImg from "../assets/icons/github-black.svg";
import FrontendMentor from "../assets/icons/frontend-mentor.png";
import LinkedinImg from "../assets/icons/linkedin-black.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "This field is required";
      }
      if (!values.email) {
        errors.email = "This field is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Please use a valid email address";
      }
      if (!values.message) {
        errors.message = "This field is required";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Your message has been sent successfully!");
            resetForm();
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Oops, something went wrong. Please try again.");
          }
        );
    },
  });

  return (
    <main className="max-w-screen-xl mx-auto px-6 mt-0">
      {/* Get in touch section */}
      <section id="about">
        <div className="container border-t-2 border-b-2 border-[#e1e1e2]">
          <div className="flex flex-col md:flex-row md:space-x-24 py-8 px-4 ">
            {/* Heading Container */}
            <div className="w-full md:w-1/2 flex justify-start items-start">
              <h1 className="text-4xl font-bold pt-6">Get in Touch</h1>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-3/4 flex flex-col justify-center text-left lg:ml-4 pt-6">
              <p className="text-lg w-full leading-loose">
                I’d love to hear about what you’re working on and how I could
                help. I’m currently looking for a new role and am open to a wide
                range of opportunities. My preference would be to find a
                position in a company in South Africa. But I’m also happy to
                hear about opportunities that don’t fit that description. I’m a
                hard-working and positive person who will always approach each
                task with a sense of purpose and attention to detail. Please do
                feel free to check out my online profiles below and get in touch
                using the form.
              </p>
              <div className="flex space-x-6 py-6">
                <a
                  href="https://www.frontendmentor.io/profile/KuvashneeNaidoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FrontendMentor}
                    alt="Frontend Mentor Link"
                    className="h-8 border border-black rounded-lg"
                  />
                </a>
                <a
                  href="https://github.com/KuvashneeNaidoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GithubImg} alt="Github Link" className="h-8" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kuvashnee-naidoo-924947222/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedinImg} alt="Linkedin Link" className="h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me section */}
      <section id="contact">
        <div className="container py-8 px-6">
          <div className="flex flex-col md:flex-row md:space-x-24">
            <div className="w-full md:w-1/2 flex justify-start items-start">
              <h1 className="text-4xl font-bold pt-6">Contact Me</h1>
            </div>

            <div className="w-full md:w-3/4 flex flex-col justify-center text-left lg:ml-4 pt-6">
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name Field */}
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Appleseed"
                  className={`p-4 w-full bg-[#ebebec] text-sm text-gray-600 
                    ${
                      formik.touched.name && formik.errors.name
                        ? "border border-[#f43030]"
                        : ""
                    }
                    ${
                      formik.touched.name && !formik.errors.name
                        ? "border border-[rgb(95,180,162)]"
                        : ""
                    }
                    focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <h6 className="text-red-500 text-sm">{formik.errors.name}</h6>
                ) : null}

                {/* Email Field */}
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mt-8"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className={`p-4 w-full bg-[#ebebec] text-sm text-gray-600 
              ${
                formik.touched.email && formik.errors.email
                  ? "border border-[#f43030]"
                  : ""
              }
              ${
                formik.touched.email && !formik.errors.email
                  ? "border border-[rgb(95,180,162)]"
                  : ""
              } focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <h6 className="text-red-500 text-sm">
                    {formik.errors.email}
                  </h6>
                ) : null}

                {/* Message Field */}
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mt-8"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can I help?"
                  className={`p-4 w-full bg-[#ebebec] text-sm text-gray-600 
              ${
                formik.touched.message && formik.errors.message
                  ? "border border-[#f43030]"
                  : ""
              }
              ${
                formik.touched.message && !formik.errors.message
                  ? "border border-[rgb(95,180,162)]"
                  : ""
              } focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <h6 className="text-red-500 text-sm">
                    {formik.errors.message}
                  </h6>
                ) : null}

                <button
                  type="submit"
                  className="max-w-fit mt-4 px-8 tracking-widest py-4 border border-black bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-left text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </main>
  );
};

export default Contact;
