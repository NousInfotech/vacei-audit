'use client';

import React from 'react';

const ComparePlans = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-gray-300">
            Complete features list of the Platform
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-6 px-6 font-bold text-white">Features</th>
                  <th className="text-center py-6 px-6 font-bold text-white">Service Package</th>
                  <th className="text-center py-6 px-6 font-bold text-white">Portal License</th>
                  <th className="text-center py-6 px-6 font-bold text-white">Full Package</th>
                </tr>
              </thead>
              <tbody>
                {/* Document Management */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white mb-3">Document Management</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Document Upload</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">OCR Processing</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Document Organization</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Advanced Document Management</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Accounting & Bookkeeping */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white mb-3">Accounting & Bookkeeping</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Bookkeeping Services</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Financial Statements</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Reconciliation</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Custom Templates</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Audit & Compliance */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white mb-3">Audit & Compliance</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Audit Support</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Risk Assessment</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Compliance Tools</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Advanced Audit Features</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Support & Integration */}
                <tr>
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white mb-3">Support & Integration</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Email Support</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Priority Support</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Custom Integrations</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">Dedicated Account Manager</span>
                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">i</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-gray-600">—</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
