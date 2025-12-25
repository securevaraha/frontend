export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
              <p className="text-gray-600 mb-4">
                The information provided on this website is for general informational purposes only 
                and is not intended as medical advice, diagnosis, or treatment recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Medical Advice</h2>
              <p className="text-gray-600 mb-4">
                Always seek the advice of your physician or other qualified healthcare provider with 
                any questions you may have regarding a medical condition. Never disregard professional 
                medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Situations</h2>
              <p className="text-gray-600 mb-4">
                If you think you may have a medical emergency, call your doctor or emergency services 
                immediately. This website does not recommend or endorse any specific tests, physicians, 
                procedures, opinions, or other information that may be mentioned.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Information</h2>
              <p className="text-gray-600 mb-4">
                While we strive to provide accurate and up-to-date information, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability of the information contained on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                City Scan & MRI shall not be liable for any loss or damage arising from the use of 
                information on this website or from any errors or omissions in the content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For medical questions or concerns, please contact your healthcare provider or our facility at:
                <br />
                Phone: (555) 123-4567
                <br />
                Emergency: (555) 911-SCAN
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}