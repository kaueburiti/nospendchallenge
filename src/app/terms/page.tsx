import React from "react";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={false}
      />
      <div className="min-h-screen bg-white py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: March 8, 2022</p>

          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600">
                Welcome to the #NoSpendChallenge App ("we," "our," or "us").
                Your privacy is important to us. This Privacy Policy outlines
                the types of information we collect, how we use and share that
                information, and your privacy rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600">
                The personal information we collect includes your email, name,
                and profile picture. We also collect non-personal data, which
                includes challenge data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600">
                We use your information to provide, maintain, and improve our
                services, communicate with you, personalize your experience, and
                promote safety and security. We may also use your information
                for research, analysis, and promotional purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Sharing and Third-Party Services
              </h2>
              <p className="text-gray-600">
                We reserve the right to share your personal data with our
                commercial partners. Any data shared will be in accordance with
                this Privacy Policy and the relevant privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-gray-600">
                Depending on your location, you may have certain rights with
                respect to your personal information, including the right to
                access, correct, or delete your personal information, and to
                object to or limit our processing of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600">
                This app is not intended for children. If we become aware that
                we have inadvertently collected personal information from
                children, we will take steps to delete it as soon as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600">
                We implement reasonable measures to protect your personal
                information from unauthorized access, use, or disclosure.
                However, the transmission of information via the internet is not
                completely secure, and we cannot guarantee the security of your
                personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may periodically update this Privacy Policy. Any changes will
                be posted on this page with an updated "Last Updated" date.
                Please check back regularly to stay informed about any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600">
                This Privacy Policy shall be governed by and construed in
                accordance with the laws of the United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy,
                you can contact us at contact@nospendchallenge.app.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
