import React from 'react';

const Compare = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-white/20">
            <h1 className="text-3xl font-bold text-center text-sky-500 mb-2">Pick the plan that's right for you</h1>
            <p className="text-sky-500 mb-8">Manage all of your social media in one place.</p>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6">
                {/* Professional Plan */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-96 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional</h2>
                    <p className="text-2xl font-bold text-gray-800 mb-4">₹1,915<span className="text-lg font-normal">/mo*</span></p>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded mb-2 transition-colors hover:bg-gray-700 duration-300">Skip trial, get 20% off</button>
                    <p className="text-blue-600 mb-4">or <a href="#" className="underline">Free 30-day trial</a></p>
                    <p className="font-semibold text-gray-800 mb-2">1 User</p>
                    <p className="font-semibold text-gray-800 mb-4">10 Social accounts</p>
                    <div className="flex text-black space-x-2 mb-4">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-tiktok"></i>
                    </div>
                    <p className="font-semibold text-gray-800 mb-2">Features included:</p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                        <li>– Unlimited post scheduling</li>
                        <li>– Best time to post recommendations</li>
                        <li>– Custom analytics and reports</li>
                        <li>– Competitive benchmarking tool</li>
                        <li>– AI caption, hashtag, and ideas generator</li>
                        <li>– One inbox for all social accounts</li>
                        <li>– Listening Basics</li>
                        <li>– Canva integration</li>
                        <li>– Unlimited post boosting</li>
                        <li>… and much more!</li>
                    </ul>
                    <a href="#" className="text-blue-600 underline">Learn more about Professional</a>
                </div>

                {/* Team Plan */}
                <div className="bg-white border border-green-500 rounded-lg shadow-md p-6 w-96 relative transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full">Most popular</div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Team</h2>
                    <p className="text-2xl font-bold text-gray-800 mb-4">₹7,540<span className="text-lg font-normal">/mo*</span></p>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 transition-colors hover:bg-green-400 duration-300">Skip trial, get 20% off</button>
                    <p className="text-blue-600 mb-4">or <a href="#" className="underline">Free 30-day trial</a></p>
                    <p className="font-semibold text-gray-800 mb-2">3 Users</p>
                    <p className="font-semibold text-gray-800 mb-4">20 Social accounts</p>
                    <div className="flex text-black space-x-2 mb-4">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-tiktok"></i>
                    </div>
                    <p className="font-semibold text-gray-800 mb-2">Everything in PROFESSIONAL, plus:</p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                        <li>– Link in bio tool</li>
                        <li>– Suspend scheduled posts</li>
                        <li>– Team roles and permissions</li>
                        <li>– Assign DMs to teammates</li>
                        <li>– One custom-branded URL</li>
                        <li>– Automatic link tracking</li>
                        <li>… and much more!</li>
                    </ul>
                    <a href="#" className="text-blue-600 underline">Learn more about Team</a>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-96 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Enterprise</h2>
                    <p className="text-2xl font-bold text-gray-800 mb-4">Custom</p>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded mb-4 transition-colors hover:bg-gray-700 duration-300">Request a Demo</button>
                    <p className="font-semibold text-gray-800 mb-2">Starts at 5 users</p>
                    <p className="font-semibold text-gray-800 mb-4">Starts at 50 social accounts</p>
                    <div className="flex text-black space-x-2 mb-4">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-tiktok"></i>
                    </div>
                    <p className="font-semibold text-gray-800 mb-2">Everything in TEAM, plus:</p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                        <li>– Approval workflow and asset mgmt.</li>
                        <li>– Content library</li>
                        <li>– Automated engagement tools</li>
                        <li>– Single sign-on (SSO)</li>
                        <li>– Unlimited ad spend</li>
                        <li>– Free Hootsuite Academy training</li>
                    </ul>
                    <p className="font-semibold text-gray-800 mb-2">Level up with these add-ons:</p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                        <li>✦ Advanced social listening</li>
                        <li>✦ Advanced analytics</li>
                        <li>✦ Advanced inbox</li>
                        <li>✦ Employee advocacy</li>
                    </ul>
                    <a href="#" className="text-blue-600 underline">Learn more about Enterprise</a>
                </div>
            </div>
            <p className="text-sky-500 text-sm mt-8">*Prices displayed in INR, based on annual billing, but do not include applicable taxes.</p>
        </div>
    );
};

export default Compare;
