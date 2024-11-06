import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const features = [
  {
      icon: "fas fa-book",
      title: "Organize your posts",
      description: "Collect all your social post ideas ahead of time and organize them however you’d like."
  },
  {
      icon: "fas fa-image",
      title: "Easily import media",
      description: "Save images, videos and more. Includes integrations with Canva, DropBox, One Drive, and Google."
  },
  {
      icon: "fas fa-chart-line",
      title: "Learn what works",
      description: "Analytics tell you when and where to post your content to get better reach and engagement."
  },
  {
      icon: "fas fa-magic",
      title: "Write faster with AI",
      description: "Get instant suggestions to generate engaging posts and refine your writing."
  }
];


const Publish = () => {
    return (
        <div className="  mt-16 bg-white/20">
            <div className="flex flex-col gap-6 md:flex-row items-center justify-between  bg-white/20">
                <div className="md:w-1/2">
                    <img
                        src="https://buffer.com/static/homepage/webp/section-3-a.webp"
                        alt="Social media calendar and planner interface"
                        className="w-full"
                    />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 mr-6">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Grow fast and save time with a{" "}
                        <span className="text-red-500">
                            smart social media calendar and planner
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-800">
                        Easily create, schedule, and publish content for all your platforms
                        from a single dashboard. And escape creative block while you do it.
                    </p>
                    <div className="mt-8 flex space-x-4">
                    <Link to='/Offer'> <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold">
                            Start your free 30-day trial
                        </button></Link>
                        <Link to='/Compare'>  <button className="border border-gray-300 text-gray-900 px-6 py-3 rounded-lg text-lg font-bold">
                            Compare plans
                        </button></Link>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-center bg-white/20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                    See the best time to post and stay inspired with content ideas
                </h2>
                <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
                    Our social media publishing platform tells you when to post on social
                    media to get the highest engagement. You schedule your content to go
                    live then, even if you’re out of office.
                </p>
            </div>

            <div className="flex flex-col gap-6 md:flex-row items-center justify-between bg-white/20">
    <div className="flex flex-col md:flex-row-reverse items-center min-h-screen bg-white">
        <img
            src="https://buffer.com/_next/image?url=%2Fstatic%2Fcreate%2Fadd-content-medium.jpg&w=1920&q=75"
            alt="Social media calendar and planner interface"
            className="w-full"
        />
    </div>
    <div className="md:w-2/3 mt-8 md:mt-0 md:pl-8 mr-6">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Add content from anywhere
        </h1>
        <p className="mt-4 text-lg text-gray-800">
            Create your content from scratch, import it from other tools, or use SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡ &nbsp; browser extensions and mobile apps to quickly save ideas whenever inspiration strikes.
        </p>
    </div>
</div>

<div className="flex flex-col gap-4 md:flex-row items-center justify-between bg-white/20 ">
    <div className="md:w-2/3 mt-8 md:mt-0 md:pr-8 ml-6">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Refine and repurpose your ideas
        </h1>
        <p className="mt-4 text-lg text-gray-800 ">
        Collaborate with your team or with SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡ &nbsp; AI Assistant to create the perfect piece of content for any channel. Our AI understands how to write for different platforms and our approval workflows make it easy to make revisions with your team or clients.
        </p>
    </div>
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-white">
        <img
            src="https://buffer.com/_next/image?url=%2Fstatic%2Fcreate%2Fai-assistant-medium.jpg&w=1920&q=75"
            alt="Social media calendar and planner interface"
            className="w-full"
        />
    </div>
</div>


<div className="flex flex-col gap-4 md:flex-row items-center justify-between bg-white/20">
    <div className="flex flex-col md:flex-row-reverse items-center min-h-screen bg-white">
        <img
            src="https://buffer.com/_next/image?url=%2Fstatic%2Fcreate%2Ftag-dropdown-medium.jpg&w=1920&q=75"
            alt="Social media calendar and planner interface"
            className="w-full"
        />
    </div>
    <div className="md:w-2/3 mt-8 md:mt-0 md:pl-8 mr-6">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Manage your backlog
        </h1>
        <p className="mt-4 text-lg text-gray-800">
        Tag your content into themes or categories, create to-do lists, and plan your content schedule across all of your channels. SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡ &nbsp; makes it easy to see everything you’re working on at a glance.
        </p>
    </div>
</div>



<div className="flex flex-wrap justify-center items-start gap-8 p-8  bg-white/20 mb-8">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start max-w-xs">
                    <i className={`${feature.icon} text-4xl mr-4`}></i>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-xl text-gray-800">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>

<Footer />
        </div>
        
    );
};

export default Publish;
