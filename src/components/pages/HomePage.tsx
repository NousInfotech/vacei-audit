import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push('/wizard-flow');
  };

  const handleViewPricing = () => {
    router.push('/pricing');
  };

  return (
    <div className="min-h-screen bg-vacei-gradient">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20 pt-20">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Vacei Logo"
              width={80}
              height={80}
              className="w-20 h-20 mr-4"
            />
            <h1 className="vacei-text-heading text-6xl md:text-7xl font-semibold">
              Vacei Audit
            </h1>
          </div>
          <p className="vacei-text-body text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive audit and business services dashboard. 
            Streamline compliance, manage workflows, and grow your business with confidence.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => router.push('/pricing')}
              className="vacei-button-primary text-lg px-8 py-4"
            >
              Get Started Free
            </button>
            <button 
              onClick={handleRequestDemo}
              className="vacei-button-secondary text-lg px-8 py-4"
            >
              Request Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="vacei-text-heading text-4xl font-semibold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="vacei-card text-center">
              <div className="w-16 h-16 bg-service-blue rounded-full flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="vacei-text-heading text-xl font-semibold mb-3">Smart Analytics</h3>
              <p className="vacei-text-body">
                Advanced reporting with real-time insights into your audit processes.
              </p>
            </div>
            <div className="vacei-card text-center">
              <div className="w-16 h-16 bg-service-green rounded-full flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h3 className="vacei-text-heading text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="vacei-text-body">
                Bank-level security for your sensitive financial documents.
              </p>
            </div>
            <div className="väcei-card text-center">
              <div className="w-16 h-16 bg-service-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="vacei-text-heading text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="vacei-text-body">
                Instant notifications and progress tracking for all audit activities.
              </p>
            </div>
          </div>
        </section>

        {/* CTА Section */}
        <section className="text-center">
          <div className="bg-vacei-dark-bg text-white rounded-lg p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Simplify Your Audit Process?
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Let us handle your compliance and business services needs.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => router.push('/pricing')}
                className="bg-white text-vacei-dark-text px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Create Free Account
              </button>
              <button 
                onClick={handleRequestDemo}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-vacei-dark-text transition-colors"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
