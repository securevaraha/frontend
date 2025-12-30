export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Privacy Policy
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>
            Your privacy and medical information security is our top priority
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Information We Collect
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We collect personal and medical information necessary to provide quality diagnostic services, including patient demographics, medical history, and diagnostic results.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              How We Use Your Information
            </h2>
            <ul className="space-y-3" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• Providing medical diagnostic services</li>
              <li>• Communicating test results and recommendations</li>
              <li>• Scheduling appointments and follow-ups</li>
              <li>• Maintaining medical records as required by law</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Data Security
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We implement industry-standard security measures to protect your personal and medical information from unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Contact Us
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              If you have questions about this privacy policy, please contact us at info@varahasdc.in or call +91 8233338550.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}