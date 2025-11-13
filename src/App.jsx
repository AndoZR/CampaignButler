import { useState } from 'react'

function App() {
  const [domainInput, setDomainInput] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentToolkit, setCurrentToolkit] = useState(0)

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "County Commissioner",
      quote: "The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.",
      metric: "40%",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      role: "State Representative",
      quote: "CampaignButler helped us reach voters we never could have connected with otherwise.",
      metric: "65%",
      image: "👩‍💼"
    },
    {
      name: "David Martinez",
      role: "City Council Member",
      quote: "The platform streamlined our entire campaign operation from day one.",
      metric: "50%",
      image: "👨‍💼"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toolkitCategories = [
    {
      title: "Digital Presence",
      features: [
        {
          title: "Official .Vote Domain",
          description: "Secure instant credibility with a trusted .vote domain that voters recognize and trust"
        },
        {
          title: "Professional Campaign Website",
          description: "Launch a mobile-friendly, conversion-focused site that tells your story and drives action"
        },
        {
          title: "Official .Vote Email",
          description: "Create a professional, branded email address that enhances your campaign's legitimacy"
        }
      ]
    },
    {
      title: "Voter Outreach",
      features: [
        {
          title: "Door-to-Door App",
          description: "Track canvassing efforts and manage volunteer teams efficiently"
        },
        {
          title: "Phone Banking",
          description: "Connect with voters through integrated calling systems"
        },
        {
          title: "Email Campaigns",
          description: "Send targeted messages to your voter base"
        }
      ]
    },
    {
      title: "Analytics & Data",
      features: [
        {
          title: "Real-Time Analytics",
          description: "Track campaign performance with comprehensive dashboards"
        },
        {
          title: "Voter Database",
          description: "Manage and segment your voter contacts effectively"
        },
        {
          title: "Performance Metrics",
          description: "Monitor key indicators and optimize your strategy"
        }
      ]
    },
    {
      title: "Fundraising",
      features: [
        {
          title: "Donation Platform",
          description: "Accept secure online donations with ease"
        },
        {
          title: "Campaign Finance",
          description: "Track contributions and comply with regulations"
        },
        {
          title: "Recurring Donations",
          description: "Set up automated monthly giving programs"
        }
      ]
    }
  ]

  const nextToolkit = () => {
    setCurrentToolkit((prev) => (prev + 1) % toolkitCategories.length)
  }

  const prevToolkit = () => {
    setCurrentToolkit((prev) => (prev - 1 + toolkitCategories.length) % toolkitCategories.length)
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] relative overflow-hidden">
      {/* Background with subtle noise texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">Campaign</span>
                <span className="text-red-600">Butler</span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-red-500 transition-colors">Services</a>
              <a href="#pricing" className="text-white hover:text-red-500 transition-colors">Pricing</a>
              <a href="#quickstart" className="text-white hover:text-red-500 transition-colors">Quick Start</a>
              <a href="#support" className="text-white hover:text-red-500 transition-colors">Support</a>
              <a href="#blog" className="text-white hover:text-red-500 transition-colors">Blog</a>
            </div>

            {/* Contact Button */}
            <button className="bg-red-600 text-white px-6 py-2.5 flex items-center gap-2 hover:bg-red-700 transition-colors">
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Win Your Next Election with Campaign Butler's All-in-One Solution
              </h1>

              {/* Subheading */}
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                From digital presence to boots on the ground, we deliver the tools, technology, and expertise that modern campaigns need to connect with voters and secure victory.
              </p>

              {/* Domain Search Section */}
              <div className="space-y-3 pt-4">
                <label className="block text-white text-sm font-medium">Find Your Domain</label>
                <div className="flex gap-2">
                  <div className="flex-1 flex">
                    <input
                      type="text"
                      value={domainInput}
                      onChange={(e) => setDomainInput(e.target.value)}
                      placeholder="Type here..."
                      className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button className="bg-gray-700 text-white px-4 py-3 text-sm hover:bg-gray-600 transition-colors">
                      |.vote
                    </button>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-3 flex items-center gap-2 hover:bg-red-700 transition-colors">
                    Search
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Primary CTA and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
                <button className="bg-red-600 text-white px-8 py-4 text-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors">
                  Launch Your Campaign Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Connecting Line and Secondary CTAs */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-16 h-px bg-white/30"></div>
                  <div className="flex items-center gap-4 text-white">
                    <a href="#pricing" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      See Our Pricing
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <span className="text-white/30">|</span>
                    <a href="#demo" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      Schedule a Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
        </a>
      </div>
                </div>
              </div>
            </div>

            {/* Right Side - Abstract Network Graphic */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
              <div className="relative w-full h-[600px] lg:h-screen">
                {/* Network Graphic with Connected User Silhouettes */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid meet">
                  {/* Connection Lines */}
                  <g stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4">
                    <line x1="100" y1="150" x2="200" y2="200" />
                    <line x1="200" y2="200" x2="300" y1="180" />
                    <line x1="300" y1="180" x2="400" y2="220" />
                    <line x1="200" y2="200" x2="250" y1="300" />
                    <line x1="300" y1="180" x2="350" y2="280" />
                    <line x1="400" y2="220" x2="450" y1="320" />
                    <line x1="250" y1="300" x2="350" y2="280" />
                    <line x1="350" y2="280" x2="450" y1="320" />
                    <line x1="350" y2="280" x2="400" y2="380" />
                    <line x1="450" y1="320" x2="500" y2="400" />
                    <line x1="400" y2="380" x2="500" y2="400" />
                    <line x1="500" y2="400" x2="480" y1="500" />
                    <line x1="400" y2="380" x2="380" y1="480" />
                    <line x1="380" y1="480" x2="480" y1="500" />
                  </g>

                  {/* User Silhouette Nodes with Glow */}
                  <g>
                    {/* Node 1 */}
                    <circle cx="100" cy="150" r="25" fill="#3b82f6" opacity="0.3" className="animate-pulse" />
                    <circle cx="100" cy="150" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M100 130 Q90 140 85 150 Q90 160 100 170 Q110 160 115 150 Q110 140 100 130" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 2 */}
                    <circle cx="200" cy="200" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="200" cy="200" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M200 180 Q190 190 185 200 Q190 210 200 220 Q210 210 215 200 Q210 190 200 180" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 3 */}
                    <circle cx="300" cy="180" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="300" cy="180" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M300 160 Q290 170 285 180 Q290 190 300 200 Q310 190 315 180 Q310 170 300 160" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 4 */}
                    <circle cx="400" cy="220" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="400" cy="220" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M400 200 Q390 210 385 220 Q390 230 400 240 Q410 230 415 220 Q410 210 400 200" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 5 */}
                    <circle cx="250" cy="300" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="250" cy="300" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M250 280 Q240 290 235 300 Q240 310 250 320 Q260 310 265 300 Q260 290 250 280" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 6 */}
                    <circle cx="350" cy="280" r="25" fill="#3b82f6" opacity="0.3" className="animate-pulse" />
                    <circle cx="350" cy="280" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M350 260 Q340 270 335 280 Q340 290 350 300 Q360 290 365 280 Q360 270 350 260" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 7 */}
                    <circle cx="450" cy="320" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="450" cy="320" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M450 300 Q440 310 435 320 Q440 330 450 340 Q460 330 465 320 Q460 310 450 300" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 8 */}
                    <circle cx="400" cy="380" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="400" cy="380" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M400 360 Q390 370 385 380 Q390 390 400 400 Q410 390 415 380 Q410 370 400 360" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 9 */}
                    <circle cx="500" cy="400" r="25" fill="#3b82f6" opacity="0.3" className="animate-pulse" />
                    <circle cx="500" cy="400" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M500 380 Q490 390 485 400 Q490 410 500 420 Q510 410 515 400 Q510 390 500 380" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 10 */}
                    <circle cx="380" cy="480" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="380" cy="480" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M380 460 Q370 470 365 480 Q370 490 380 500 Q390 490 395 480 Q390 470 380 460" fill="#3b82f6" opacity="0.8" />
                    
                    {/* Node 11 */}
                    <circle cx="480" cy="500" r="25" fill="#3b82f6" opacity="0.3" />
                    <circle cx="480" cy="500" r="20" fill="#3b82f6" opacity="0.5" />
                    <path d="M480 480 Q470 490 465 500 Q470 510 480 520 Q490 510 495 500 Q490 490 480 480" fill="#3b82f6" opacity="0.8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Campaign Challenge Section */}
      <section className="relative z-10 bg-[#e8f4f8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Dashboard Graphic */}
            <div className="relative">
              <div className="bg-[#b8dce8] p-8 rounded-2xl relative overflow-hidden">
                {/* Dashboard Elements */}
                <div className="space-y-4 relative z-10">
                  {/* Dark Window with Bar Chart */}
                  <div className="bg-[#1a1f3a] p-4 rounded-lg">
                    <div className="flex items-end gap-2 h-24">
                      <div className="flex-1 bg-red-600 h-12 rounded-t"></div>
                      <div className="flex-1 bg-red-600 h-16 rounded-t"></div>
                      <div className="flex-1 bg-red-600 h-20 rounded-t"></div>
                      <div className="flex-1 bg-red-600 h-24 rounded-t"></div>
                      <div className="flex-1 bg-red-600 h-18 rounded-t"></div>
                    </div>
                  </div>

                  {/* Light Blue Card with Pie Chart */}
                  <div className="bg-[#d0e8f0] p-4 rounded-lg flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-20 h-20">
                        <circle cx="50" cy="50" r="40" fill="#3b82f6" opacity="0.3" />
                        <path d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z" fill="#dc2626" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* User Profile Card */}
                  <div className="bg-[#d0e8f0] p-4 rounded-lg flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>

                  {/* Code Window */}
                  <div className="bg-[#1a1f3a] p-4 rounded-lg flex items-center gap-3">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>

                  {/* Percentage Card */}
                  <div className="bg-[#d0e8f0] p-6 rounded-lg text-center">
                    <div className="text-6xl font-bold text-red-600">%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                The Campaign Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Modern campaigns require a complex mix of tools, technology, and expertise. 
                From managing digital presence to coordinating boots-on-the-ground efforts, 
                campaigns need integrated solutions that can handle everything from domain 
                registration to voter outreach strategies.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="mt-16 border-t border-gray-300"></div>
        </div>
      </section>

      {/* The Campaign Butler Solution Section */}
      <section className="relative z-10 bg-[#e8f4f8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                The Campaign Butler Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CampaignButler is an integrated platform that handles every aspect of your 
                campaign. From securing your domain name to developing comprehensive door-knocking 
                strategies, we provide the tools and expertise you need to connect with voters 
                and secure victory.
              </p>
            </div>

            {/* Right - Browser Window Interface */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-[#1a1f3a] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Traffic Lights */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {/* Menu Icon */}
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Logo */}
                    <span className="text-white font-semibold">
                      <span>Campaign</span>
                      <span className="text-red-600">Butler</span>
                    </span>
                  </div>
                  {/* Search */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div className="w-32 h-6 bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="bg-[#e8f4f8] p-6 min-h-[400px] relative">
                  {/* Left Panel */}
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-[#1a1f3a] p-4">
                    <div className="bg-[#d0e8f0] p-3 rounded-lg mb-3 relative">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Main Canvas */}
                  <div className="ml-24 relative">
                    {/* VOTE Button */}
                    <div className="absolute top-0 left-0 z-20">
                      <button className="border-2 border-gray-400 bg-white px-3 py-1 text-sm font-semibold rounded hover:bg-gray-50 cursor-pointer">
                        VOTE
        </button>
                    </div>

                    {/* Large Aa Element with Selection Box */}
                    <div className="mt-12 relative">
                      <div className="border-2 border-blue-500 border-dashed p-8 bg-white/50 rounded-lg relative">
                        {/* Resize Handles */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-2 border-blue-500 bg-white"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-blue-500 bg-white"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-2 border-blue-500 bg-white"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-2 border-blue-500 bg-white"></div>
                        
                        {/* Cursor Hand */}
                        <div className="absolute -top-6 left-4">
                          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/>
                          </svg>
                        </div>

                        {/* Aa Text */}
                        <div className="text-8xl font-bold text-gray-400 text-center">Aa</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar Tools */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-white border-l border-gray-200 p-3 flex flex-col gap-4 items-center">
                    <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <span className="text-xl font-bold">+</span>
                    </div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <span className="text-lg font-bold">T</span>
                    </div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <span className="text-lg font-bold">O</span>
                    </div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Winning Campaigns Choose Section */}
      <section className="relative z-10 bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Dotted Network Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#9ca3af" opacity="0.3" />
              </pattern>
            </defs>
            <path d="M 0 0 Q 300 200 400 400 T 600 600" stroke="none" fill="url(#dots)" />
            <circle cx="100" cy="150" r="3" fill="#9ca3af" opacity="0.4" />
            <circle cx="200" cy="200" r="2" fill="#9ca3af" opacity="0.3" />
            <circle cx="300" cy="250" r="2.5" fill="#9ca3af" opacity="0.35" />
            <circle cx="150" cy="300" r="2" fill="#9ca3af" opacity="0.3" />
            <circle cx="250" cy="350" r="2" fill="#9ca3af" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Why Winning Campaigns Choose
              <br />
              Campaign Butler
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Chess King Graphic */}
            <div className="relative">
              <div className="bg-[#1a1f3a] rounded-2xl p-8 relative overflow-hidden">
                {/* Chessboard and King */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Chessboard Background */}
                  <div className="relative grid grid-cols-8 w-64 h-64 border-2 border-gray-600 mb-6">
                    {Array.from({ length: 64 }).map((_, i) => {
                      const row = Math.floor(i / 8);
                      const col = i % 8;
                      const isLight = (row + col) % 2 === 0;
                      return (
                        <div
                          key={i}
                          className={isLight ? 'bg-gray-700' : 'bg-gray-900'}
                        />
                      );
                    })}
                    
                    {/* White King Piece - Centered on chessboard */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="text-6xl text-white drop-shadow-lg">♔</div>
                    </div>

                    {/* Glowing Circle Around King */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15">
                      <div className="w-32 h-32 border-2 border-blue-400 rounded-full opacity-50 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-300 rounded-full opacity-30"></div>
                    </div>
                  </div>

                  {/* Abstract UI Elements with Icons */}
                  <div className="relative mt-8 h-64 w-full">
                    {/* Connection Lines SVG - connecting icons to chessboard center */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 304 256" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 5 }}>
                      {/* Center point (chessboard center relative to this container) */}
                      <circle cx="152" cy="0" r="2" fill="#3b82f6" opacity="0.6" />
                      
                      {/* Lines connecting icons to center */}
                      <line x1="24" y1="24" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="280" y1="24" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="24" y1="128" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="280" y1="128" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="76" y1="240" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="228" y1="240" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                      <line x1="152" y1="240" x2="152" y2="0" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                    </svg>

                    {/* Magnifying Glass Icon - Top Left */}
                    <div className="absolute top-0 left-0 z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bar Chart Icon - Top Right */}
                    <div className="absolute top-0 right-0 z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Target/Bullseye Icon - Middle Left */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                    </div>

                    {/* Lightbulb Icon - Middle Right */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>

                    {/* People/Group Icon - Bottom Left */}
                    <div className="absolute bottom-0 left-[25%] z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Handshake Icon - Bottom Right */}
                    <div className="absolute bottom-0 right-[25%] z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>

                    {/* Gear/Settings Icon - Bottom Center */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border-2 border-blue-400 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Feature List */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-600"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Unified Strategy, Maximum Impact
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.
        </p>
      </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-600"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Built for Political Success
                  </h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-600"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Scale to Your Race
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Winning Candidates Section */}
      <section className="relative z-10">
        {/* Title Section - White Background */}
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Trusted by Winning Candidates
            </h2>
          </div>
        </div>

        {/* Testimonial Carousel Section - Dark Background */}
        <div className="bg-[#0a0e27] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Items */}
              <div className="flex items-center justify-center gap-4 overflow-hidden">
                {/* Left Side Profile (Previous) */}
                <div className={`hidden md:block w-48 h-64 rounded-xl overflow-hidden transition-all duration-500 ${
                  currentTestimonial === 0 ? 'opacity-30 scale-90' : 'opacity-50 scale-95'
                }`}>
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-8xl opacity-50">
                      {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].image}
                    </div>
                  </div>
                </div>

                {/* Center Video Player - Active Testimonial */}
                <div className="relative w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
                  {/* Metric Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-gray-300 font-semibold">{testimonials[currentTestimonial].metric}</span>
                  </div>

                  {/* Video Player Area */}
                  <div className="relative aspect-video bg-gray-950 flex items-center justify-center">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                      {testimonials[currentTestimonial].image}
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-900/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800/80 transition-colors">
                        <div className="w-0 h-0 border-l-[16px] border-l-red-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-8 bg-gray-900">
                    <blockquote className="text-xl italic text-white mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="text-white">
                      <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-400">| {testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>

                {/* Right Side Profile (Next) */}
                <div className={`hidden md:block w-48 h-64 rounded-xl overflow-hidden transition-all duration-500 ${
                  currentTestimonial === testimonials.length - 1 ? 'opacity-30 scale-90' : 'opacity-50 scale-95'
                }`}>
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-8xl opacity-50">
                      {testimonials[(currentTestimonial + 1) % testimonials.length].image}
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-red-600 w-8' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="bg-[#0a0e27] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {/* Human Rights Campaign */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">=</span>
                </div>
                <div className="text-white text-xs text-center font-semibold">HUMAN RIGHTS<br />CAMPAIGN</div>
              </div>

              {/* Planned Parenthood */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">P</span>
                </div>
                <div className="text-white text-xs text-center">
                  <div className="font-semibold">Planned Parenthood</div>
                  <div className="text-gray-400 text-[10px]">Care. No matter what.</div>
                </div>
              </div>

              {/* National Children's Cancer Society */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">nc CS</span>
                </div>
                <div className="text-white text-xs text-center">
                  <div className="font-semibold">The National</div>
                  <div className="font-semibold">Children's Cancer</div>
                  <div className="font-semibold">Society</div>
                </div>
              </div>

              {/* U.S. Immigration and Customs Enforcement */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-gray-900">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ICE</span>
                  </div>
                </div>
                <div className="text-white text-xs text-center">
                  <div className="font-semibold">U.S. Immigration</div>
                  <div className="font-semibold">and Customs</div>
                  <div className="font-semibold">Enforcement</div>
                </div>
              </div>

              {/* NARAL Pro-Choice America */}
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <div className="text-2xl">🗽</div>
                </div>
                <div className="text-white text-xs text-center">
                  <div className="font-semibold">NARAL</div>
                  <div className="font-semibold">PRO-CHOICE</div>
                  <div className="font-semibold">AMERICA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Campaign Toolkit Section */}
      <section className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Main Title */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Your Complete Campaign Toolkit
              </h2>

              {/* Section Header */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {toolkitCategories[currentToolkit].title}
                </h3>

                {/* Feature List */}
                <ul className="space-y-4">
                  {toolkitCategories[currentToolkit].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-600"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 pt-4">
                {toolkitCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentToolkit(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentToolkit 
                        ? 'bg-blue-900' 
                        : 'bg-blue-300'
                    }`}
                    aria-label={`Go to ${toolkitCategories[index].title}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Visual Graphic */}
            <div className="relative">
              {/* Desktop Monitor Background */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg opacity-30 blur-sm transform rotate-3 scale-105"></div>
              <div className="relative bg-gray-100 rounded-lg p-4 shadow-xl">
                {/* Monitor Screen - Blurred Grid */}
                <div className="bg-white rounded border-4 border-gray-300 p-2">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded opacity-60"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smartphone in Hand */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Hand holding phone */}
                  <div className="relative w-64 h-[500px]">
                    {/* Phone Frame */}
                    <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                        {/* Phone Screen Content */}
                        <div className="h-full bg-gray-50 p-6 space-y-6">
                          {/* App Name */}
                          <div className="text-center pt-4">
                            <span className="text-2xl font-bold">
                              <span className="text-gray-900">Campaign</span>
                              <span className="text-red-600">Butler</span>
                            </span>
                          </div>

                          {/* Search Bar */}
                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Type here..."
                                className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                                readOnly
                              />
                              <button className="bg-gray-700 text-white px-4 py-3 rounded-lg text-sm font-semibold">
                                | .vote
                              </button>
                            </div>

                            {/* Search Button */}
                            <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                              Search
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>

                          {/* Ballot Box Icon */}
                          <div className="flex justify-center pt-8">
                            <div className="w-32 h-32 border-4 border-gray-400 rounded-lg flex items-center justify-center">
                              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Top Right */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button
                  onClick={prevToolkit}
                  className="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
                  aria-label="Previous toolkit"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextToolkit}
                  className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                  aria-label="Next toolkit"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30+ Years of Campaign Victory Experience Section */}
      <section className="relative z-10 bg-[#0a0e27] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern - Swirling Red Dots */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="redDotGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </radialGradient>
            </defs>
            {Array.from({ length: 50 }).map((_, i) => {
              const angle = (i / 50) * Math.PI * 2;
              const radius = 200 + (i % 10) * 30;
              const x = 800 + Math.cos(angle) * radius;
              const y = 400 + Math.sin(angle) * radius;
              return (
                <circle key={i} cx={x} cy={y} r="3" fill="url(#redDotGradient)" opacity={0.4} />
              );
            })}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-red-600">30+</span> Years of Campaign Victory Experience
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                <span className="text-red-600 font-semibold">Campaign Butler</span> brings together decades of political expertise, cutting-edge marketing technology, and proven strategies to help candidates win elections at every level. From local school board races to congressional campaigns, we provide the tools, technology, and expertise needed to run strategic, consistent, and targeted voter outreach that delivers results.
              </p>
            </div>

            {/* Right Side - Abstract Graphics */}
            <div className="relative">
              <div className="relative w-full h-96">
                <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                  {/* Connection Lines */}
                  <g stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3">
                    <line x1="200" y1="200" x2="150" y2="100" />
                    <line x1="200" y1="200" x2="250" y2="100" />
                    <line x1="200" y1="200" x2="150" y2="300" />
                    <line x1="200" y1="200" x2="250" y2="300" />
                  </g>

                  {/* Stars and Person Icon */}
                  <g transform="translate(150, 100)">
                    <circle cx="25" cy="25" r="30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                    <text x="25" y="30" fontSize="20" fill="#3b82f6" textAnchor="middle">⭐</text>
                    <text x="25" y="50" fontSize="20" fill="#3b82f6" textAnchor="middle">⭐</text>
                    <text x="25" y="70" fontSize="20" fill="#3b82f6" textAnchor="middle">⭐</text>
                    <path d="M 25 80 Q 20 90 15 100 Q 20 110 25 120 Q 30 110 35 100 Q 30 90 25 80" 
                          stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
                  </g>

                  {/* Thumbs Up Icon */}
                  <g transform="translate(250, 100)">
                    <circle cx="25" cy="25" r="30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                    <path d="M 25 30 L 20 40 L 20 50 Q 20 60 30 60 L 35 60 Q 40 60 40 55 L 40 35 Q 40 30 35 30 Z" 
                          stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M 15 50 L 10 55 L 10 60 L 15 60 Z" 
                          stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
                  </g>

                  {/* Pie Chart Icon */}
                  <g transform="translate(150, 300)">
                    <circle cx="25" cy="25" r="30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                    <circle cx="25" cy="25" r="25" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M 25 25 L 25 0 A 25 25 0 0 1 45 15 Z" 
                          fill="#3b82f6" opacity="0.3" />
                    <line x1="25" y1="25" x2="50" y2="10" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
                    <line x1="25" y1="25" x2="55" y2="20" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
                  </g>

                  {/* Checkmark Square Icon */}
                  <g transform="translate(250, 300)">
                    <circle cx="25" cy="25" r="30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                    <rect x="10" y="10" width="30" height="30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M 15 25 L 22 32 L 35 18" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Campaigns Nationwide Section */}
      <section className="relative z-10 bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        {/* US Map Background Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <path d="M 200 100 L 300 120 L 400 110 L 500 130 L 600 120 L 700 140 L 800 130 L 850 150 L 800 200 L 750 250 L 700 300 L 650 350 L 600 400 L 550 450 L 500 480 L 400 470 L 300 450 L 200 400 L 150 350 L 120 300 L 100 250 L 110 200 L 150 150 Z" 
                  stroke="#3b82f6" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Serving Campaigns Nationwide
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* All 50 States */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 border-4 border-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">All 50 States</h3>
              <p className="text-gray-700 text-center">Compliant solutions for campaigns anywhere in America</p>
            </div>

            {/* Every Race Level */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 border-4 border-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Every Race Level</h3>
              <p className="text-gray-700 text-center">From city council to congressional campaigns</p>
            </div>

            {/* Specialized Knowledge */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 border-4 border-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Specialized Knowledge</h3>
              <p className="text-gray-700 text-center">Expertise in school board, judicial, and other specialized races</p>
            </div>

            {/* Partisan & Non-Partisan */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 border-4 border-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Partisan & Non-Partisan</h3>
              <p className="text-gray-700 text-center">Solutions for every type of campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Asset10 */}
      <section className="relative z-10 bg-gradient-to-r from-red-600 to-red-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Win Your Next Election?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of winning candidates who trust Campaign Butler to power their campaigns. 
            Get started today and see the difference our platform makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
              Start Your Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Asset11 */}
      <section className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Campaign Butler
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started with Campaign Butler?",
                answer: "You can get started in minutes. Our platform is designed for quick setup, and our team is available to help you launch your campaign website and domain within 24 hours."
              },
              {
                question: "Do you support campaigns at all levels?",
                answer: "Yes! Campaign Butler works with campaigns at every level - from local school board races to congressional campaigns. Our platform scales to meet your needs."
              },
              {
                question: "What makes Campaign Butler different from other platforms?",
                answer: "Campaign Butler combines decades of political expertise with cutting-edge technology. We're not just a tech platform - we're campaign strategists who understand what it takes to win elections."
              },
              {
                question: "Is Campaign Butler compliant with campaign finance regulations?",
                answer: "Absolutely. Our platform is designed to help you stay compliant with FEC regulations and state-specific requirements. We provide tools to track contributions and expenditures properly."
              },
              {
                question: "Can I use Campaign Butler for non-partisan races?",
                answer: "Yes, Campaign Butler serves both partisan and non-partisan campaigns. Our tools are designed to work for any type of political campaign."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Asset12 */}
      <footer className="relative z-10 bg-[#0a0e27] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Campaign</span>
                <span className="text-red-600">Butler</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Your complete campaign toolkit for winning elections at every level.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Campaign Butler. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
