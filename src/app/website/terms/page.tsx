export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By using our services, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
              <p className="text-gray-600 mb-4">
                City Scan & MRI provides diagnostic imaging services including CT scans, MRI scans, 
                X-rays, and ultrasound examinations. All services are provided by licensed medical professionals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Appointment Policy</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Appointments must be scheduled in advance</li>
                <li>Please arrive 15 minutes before your scheduled appointment</li>
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Late arrivals may result in rescheduling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment is due at the time of service unless prior arrangements have been made. 
                We accept cash, credit cards, and most insurance plans.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Our liability is limited to the cost of the services provided. We are not liable 
                for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms & Conditions, contact us at:
                <br />
                Email: legal@cityscanmri.com
                <br />
                Phone: (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}