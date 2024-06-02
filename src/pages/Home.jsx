import HeroImg from "../assets/hero.jpg";
import Company_Growth from "../Components/Company_Growth";
import ContactForm from "../Components/ContactForm";
import OurProjects from "../Components/OurProjects";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row min-h-full  border-b mt-6">
        <div className="container w-full md:w-1/2 h-auto md:h-full mt-7 p-6 md:p-12">
          <h2 className="font-medium text-2xl text-red-400 text-left">
            AWARD WINNING
          </h2>
          <h1 className="text-5xl mt-4 font-bold text-left">
            DIGITAL MARKETING AGENCY
          </h1>
          <p className="mt-6 text-left sm:hidden md:block">
            Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ele at pulvina. Morbi
            iaculis lacus nec risus finibus feugiat et fermentum.
          </p>
          <div className="flex justify-start">
            <button className="mt-6 px-4 py-2 bg-red-500 text-white font-semibold rounded-md">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto md:h-full">
          <img
            className="w-full h-full object-cover"
            src={HeroImg}
            alt="Hero"
          />
        </div>
      </div>
      <ContactForm />
      <Services />
      <OurProjects />
      <Company_Growth />
    </>
  );
};

export default Home;
