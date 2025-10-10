import React from 'react'

const Team = () => {
  return (
    <div className="relative w-screen bg-black py-20" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#fbf8f3] rounded-3xl p-12 border border-green-100/50 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Expert Team</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Combining decades of accounting and audit experience with cutting-edge technology expertise
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-lime-100 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-16 h-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Accounting Experts</h4>
              <p className="text-gray-600 font-medium">CPA & Audit Specialists</p>
              <p className="text-sm text-gray-500 mt-2">Licensed professionals with decades of experience</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-lime-100 to-green-100 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-16 h-16 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Technology Leaders</h4>
              <p className="text-gray-600 font-medium">Software Engineers & Architects</p>
              <p className="text-sm text-gray-500 mt-2">Building scalable, secure platforms</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-16 h-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry Innovators</h4>
              <p className="text-gray-600 font-medium">FinTech & Automation Experts</p>
              <p className="text-sm text-gray-500 mt-2">Pioneering the future of accounting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team