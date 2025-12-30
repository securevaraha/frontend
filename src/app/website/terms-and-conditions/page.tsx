export default function TermsAndConditionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Terms & Conditions
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>
            Terms of service for our medical diagnostic services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Appointment Policy
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              Appointments should be scheduled in advance. Emergency cases are handled on priority basis. Please arrive 15 minutes before your scheduled appointment time.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Payment Terms
            </h2>
            <ul className="space-y-3" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• Payment is due at the time of service</li>
              <li>• We accept cash, cards, and digital payments</li>
              <li>• Insurance claims are processed as per policy terms</li>
              <li>• Refunds are processed within 7-10 business days</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Medical Records
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              All medical records and diagnostic reports are confidential and will be shared only with authorized personnel or as required by law.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Limitation of Liability
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              Our liability is limited to the cost of the diagnostic service provided. We maintain professional indemnity insurance as required by medical regulations.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Contact Information
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              For questions regarding these terms, contact us at info@varahasdc.in or call +91 8233338550.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}