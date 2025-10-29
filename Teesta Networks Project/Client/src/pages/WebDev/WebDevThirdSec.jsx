import React from 'react';

// Data for the business expertise categories
const expertiseCategories = [
  { name: 'ERP', link: '#erp' },
  { name: 'CRM', link: '#crm' },
  { name: 'Human resources', link: '#hr' },
  { name: 'Financial management', link: '#financial' },
  { name: 'Sales & marketing', link: '#sales' },
  { name: 'Customer service', link: '#customer-service' },
  { name: 'Supply chain management', link: '#supply-chain' },
  { name: 'Project management', link: '#project-management' },
  { name: 'Operations management', link: '#operations-management' },
  { name: 'Asset management', link: '#asset-management' },
  { name: 'Document management', link: '#document-management' },
  { name: 'Learning management', link: '#learning-management' },
  { name: 'BI & data analytics', link: '#bi-data-analytics' },
  { name: 'Collaboration & productivity management', link: '#collaboration' },
];

const WebDevThirdSec = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* --- Main Header (Simplified for this component) --- */}
      {/* <div className="max-w-7xl mx-auto w-full pt-10 px-4 md:px-10">
        <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold">iflexion</span>
            <nav className="space-x-4 hidden sm:flex items-center text-gray-700">
                {['Company', 'Services', 'Industries', 'Portfolio'].map(item => (
                    <a key={item} href="#" className="hover:text-blue-600 transition">{item}</a>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Contact us
                </button>
            </nav>
        </div>
      </div> */}

      {/* --- Main Content Section --- */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-10 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "#cfa866" }}>
          25+ years of business-centric tech expertise
        </h1>
        {/* Description */}
        <p className="text-lg mb-12 max-w-3xl mx-auto" style={{ color: "#1b2e4e" }}>
          We deliver enterprise software solutions that help companies transform key 
          business processes, maximizing operational efficiency and agility.
        </p>

        {/* --- Categories Grid --- */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertiseCategories.slice(0, 13).map((category) => ( // Render first 13 items in the grid
              <a
                key={category.name}
                href={category.link}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="
                  flex items-center justify-center
                  px-6 py-4 border border-gray-300 rounded-md
                  text-lg font-medium text-gray-700
                  hover:border-[#cfa866] hover:text-[#cfa866] hover:shadow-lg
                  transition-all duration-300 ease-in-out
                  whitespace-nowrap
                "
              >
                {category.name}
                {/* External link icon (Optional, but good for UX with target="_blank") */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
          
          {/* Last category button (Collaboration & productivity management) below the grid */}
          <div className="mt-8"> {/* Add margin top to separate from the grid */}
            {expertiseCategories.slice(13).map((category) => (
              <a
                key={category.name}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-6 py-4 border border-gray-300 rounded-md
                  text-lg font-medium text-gray-700
                  hover:border-[#cfa866] hover:text-[#cfa866] hover:shadow-lg
                  transition-all duration-300 ease-in-out
                  whitespace-nowrap
                "
              >
                {category.name}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 w-4 h-4 text-[#1b2e4e] group-hover:text-[#1b2e4e] transition-colors duration-300"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </main>
      
      {/* Optional Footer */}
      <footer className="h-10 bg-gray-100 mt-10"></footer>
    </div>
  );
};

export { WebDevThirdSec };