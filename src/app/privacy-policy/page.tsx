import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image
          src="/images/home.jpg"
          alt="Medical imaging equipment"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-md">
            We respect your privacy and are committed to protecting your personal and health-related information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              Varaha Sdc is a medical imaging service provider. We respect your privacy and are committed to protecting your personal and health-related information.
            </p>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Information We Collect
            </h2>
            <p className="mb-4" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We may collect the following information when you contact us or use our services:
            </p>
            <ul className="space-y-2 mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• Name</li>
              <li>• Phone number</li>
              <li>• Appointment details</li>
              <li>• Messages shared via WhatsApp</li>
              <li>• Basic medical information required for imaging services (such as scan type)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              How We Use Information
            </h2>
            <p className="mb-4" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We use your information to:
            </p>
            <ul className="space-y-2 mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• Schedule and manage medical imaging appointments</li>
              <li>• Provide imaging services</li>
              <li>• Respond to inquiries and provide customer support</li>
              <li>• Share appointment confirmations, reports availability, and service-related updates</li>
              <li>• Communicate via WhatsApp regarding appointments, reports, and support</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              WhatsApp Communication
            </h2>
            <p className="mb-4" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              By contacting Varaha Sdc through WhatsApp, you consent to receive messages related to:
            </p>
            <ul className="space-y-2 mb-4" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• Appointment booking and confirmation</li>
              <li>• Report availability notifications</li>
              <li>• Customer support and service-related communication</li>
            </ul>
            <p className="mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We do not use WhatsApp for unsolicited marketing messages.
            </p>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Data Sharing
            </h2>
            <ul className="space-y-2 mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              <li>• We do not sell, trade, or rent personal or medical information.</li>
              <li>• Information is shared only with authorized staff and service providers strictly for delivering imaging services.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Data Security
            </h2>
            <p className="mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              We take reasonable administrative and technical measures to protect personal and medical information from unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Your Consent
            </h2>
            <p className="mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              By using our services or contacting us through WhatsApp, you consent to this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Contact Information
            </h2>
            <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
              For any questions regarding this Privacy Policy, please contact us at:
              <br />📧 info@varahasdc.in
              <br />📞 +91 8233338550
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}