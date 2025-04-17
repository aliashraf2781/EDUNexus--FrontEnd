import { Lightbulb,ArrowRight ,Quote,Search, Bell, SendHorizontal } from "lucide-react";

export default function KnowledgeSection() {



    const testimonials = [
        {
          quote:
            "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
          name: "Sundar Pichai",
          title: "Chief Chairman of",
          company: "Google",
          companyColor: "text-blue-500",
        },
        {
          quote:
            "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
          name: "Satya Nadella",
          title: "CEO of",
          company: "Microsoft",
          companyColor: "text-blue-600",
        },
        {
          quote:
            "In total, it was a big success, I would get emails about what a fantastic resource it was.",
          name: "Ted Sarandos",
          title: "Chief Executive Officer of",
          company: "Netflix",
          companyColor: "text-purple-600",
        },
      ];
      
  return (<>

    {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 mb-16 border-b border-light gap-4">
            {/* Logo + Search */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-md">
              <h1 className="text-2xl font-bold text-dark">
                Edu<span className="text-primary">NEXUS</span>
              </h1>
              <div className="flex items-center border border-light rounded-md px-3 py-1 bg-white w-full sm:w-auto flex-1">
                <Search size={18} className="text-light mr-2" />
                <input
                  type="text"
                  placeholder="What do you want learn..."
                  className="w-full outline-none bg-transparent text-dark placeholder-light"
                />
              </div>
            </div>
    
            {/* Actions */}
            <div className="flex items-center gap-4">
              <Bell className="text-dark" />
              <button className="bg-primary text-white px-4 py-2 rounded font-medium">
                Create Account
              </button>
              <button className="text-primary border border-primary px-4 py-2 rounded font-medium">
                Sign In
              </button>
            </div>
          </div>
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
      
      {/* content */}
      <div className="max-w-sm w-full text-center md:text-left">
        <h1 className="text-7xl font-bold text-gray-300 leading-tight">
          2024–2025
        </h1>

        <h2 className="text-2xl font-semibold  text-gray-800 flex items-center justify-center md:justify-start gap-2 mt-2">
          <Lightbulb className="text-orange-500" />
          We share knowledge with the world
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. 
          Donec non ipsum non risus egestas tincidunt at vitae nulla.
        </p>
      </div>

      {/* image */}
      <div className="max-w-md w-full flex justify-center md:ml-2 mt-6 md:mt-0">
        <img
          src="./about/Images.png"
          alt="Team Member"
          className="rounded-xl object-cover shadow-md w-full max-w-xs"
        />
      </div>

    </div>


                                {/* section2 */}
<div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-secondary">
      

{/* image */}
<div className="max-w-md w-full flex justify-center md:ml-2 mt-6 md:mt-0 ">
        <img
          src="./about/two-business-partners-working-office 1.png"
          alt="Team Member"
          className="rounded-xl object-cover shadow-md w-full max-w-xs"
        />
      </div>
{/* content */}

      <div className="max-w-sm w-full text-center md:text-left">
      <h6 className="text-primary">
      OUR ONE BILLION MISSION        </h6>

        <h2 className="text-2xl font-semibold  text-gray-800 flex items-center justify-center md:justify-start gap-2 mt-2">
          Our one billion mission sounds bold, We agree.        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mt-2">
        "We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma.
         Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.
        </p>
      </div> 

    </div>
                               
                        {/* section3 */}

    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
      

      {/* content */}
      
            <div className="max-w-sm w-full text-center md:text-left">
            <h6 className="text-primary">
            OUR GALLERY
                   </h6>
      
              <h2 className="text-2xl font-semibold  text-gray-800 flex items-center justify-center md:justify-start gap-2 mt-2">
              We’ve been here almost 17 years                        </h2>
      
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Fusce lobortis leo augue, sit amet tristique nisi commodo in.
               Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded flex items-center gap-2 mx-auto lg:mx-0 mt-4">
                Join Our Team  <ArrowRight />
              </button>
            </div> 
            
      {/* image */}
      <div className="max-w-lg w-full flex justify-center md:ml-2 mt-6 md:mt-0">
        <img
            src="./about/Gallery.png"
            alt="Team Member"
            className="rounded-xl object-cover  w-full max-w-3xl"
        />
        </div>

      
          </div>
                 {/* section4 */}


                 <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg  flex flex-col items-center text-center"
          >
            <div className="relative bg-gray-light rounded-md px-6 py-8 shadow">
              <Quote className="absolute -top-4 left-4 text-[#ff6636]" size={28} />
              <p className="text-sm text-gray-800 leading-relaxed">
                {testimonial.quote}
              </p>
              <Quote className="absolute -bottom-4 right-4 text-[#ff6636] rotate-180" size={28} />
            </div>
            <div className="mt-6">
              <p className="text-base font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonial.title}{" "}
                <span className="text-[#6C63FF]">{testimonial.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
    </>
  );
}
 