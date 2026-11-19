import React, { useState } from 'react';
import { Shield, Phone, MapPin, X } from 'lucide-react';
import { LANDING_IDENTITY } from './data';

export const StandaloneFooter: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Identity & Overview */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                {LANDING_IDENTITY.fullTitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional mold remediation, structural drying, and moisture diagnostics serving Oakwood,
              Montgomery County, and surrounding Miami Valley communities.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Oakwood, OH 45419</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{LANDING_IDENTITY.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Remediation Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  Local Architecture & Diagnostics
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-amber-400 transition-colors">
                  Service Area Communities
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  IICRC S520 Standards & Pillars
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Request an Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Service Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Montgomery County Coverage
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400">
              <span>Oakwood (45419)</span>
              <span>Dayton, OH</span>
              <span>Kettering, OH</span>
              <span>Centerville, OH</span>
              <span>Beavercreek, OH</span>
              <span>Miamisburg, OH</span>
              <span>Washington Twp</span>
              <span>Moraine, OH</span>
              <span>Riverside, OH</span>
              <span>Fairborn, OH</span>
            </div>
          </div>

          {/* Hours & Urgent Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Field Operating Hours
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Office:</strong> Mon–Sat 7:00 AM – 7:00 PM
            </p>
            <p className="text-xs text-amber-300 leading-relaxed">
              <strong>Emergency Dispatch:</strong> 24/7 Phone Answering for Active Moisture & Plumbing Leaks
            </p>
            <div className="pt-2">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-900/60 hover:bg-teal-800 text-teal-200 border border-teal-700/60 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policy Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {LANDING_IDENTITY.fullTitle}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalContent('privacy')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalContent('terms')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <a
              href="#top"
              className="hover:text-slate-200 transition-colors"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>

      {/* Built-in Compliant Legal Modals (Ensures Zero Broken Links) */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalContent === 'privacy' ? (
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">
                  Privacy Policy &bull; {LANDING_IDENTITY.fullTitle}
                </h3>
                <p>
                  Your privacy is important to us. This statement explains how information collected through this
                  service landing page is handled.
                </p>
                <h4 className="font-bold text-slate-800 text-sm">Information We Collect</h4>
                <p>
                  We collect information you explicitly provide when submitting an inquiry or calling our dispatch line
                  (such as name, phone number, address, and service details).
                </p>
                <h4 className="font-bold text-slate-800 text-sm">How Information is Used</h4>
                <p>
                  Contact details are utilized strictly to schedule mold inspections, coordinate on-site remediation
                  estimates, and dispatch certified field technicians. We never sell, rent, or distribute personal
                  contact records to external third-party advertisers.
                </p>
                <h4 className="font-bold text-slate-800 text-sm">Data Security</h4>
                <p>
                  All submitted records are handled securely using industry-standard protocols to prevent unauthorized
                  access or disclosure.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">
                  Terms of Service &bull; {LANDING_IDENTITY.fullTitle}
                </h3>
                <p>
                  By accessing this website or requesting remediation and inspection services, you acknowledge and agree
                  to the following terms.
                </p>
                <h4 className="font-bold text-slate-800 text-sm">Service Scope & Estimates</h4>
                <p>
                  All remediation work is subject to an initial on-site physical evaluation and a detailed written scope
                  of work. Final agreements, schedules, and deliverables are confirmed prior to physical execution.
                </p>
                <h4 className="font-bold text-slate-800 text-sm">Standard Compliance</h4>
                <p>
                  Mold remediation services are conducted according to IICRC S520 guidelines, utilizing containment,
                  HEPA air filtration, and EPA-registered antimicrobial solutions where applicable.
                </p>
                <h4 className="font-bold text-slate-800 text-sm">Contact Verification</h4>
                <p>
                  For any questions or clarification regarding these terms, contact our local dispatch directly at{' '}
                  <strong className="text-slate-900">{LANDING_IDENTITY.phoneDisplay}</strong>.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
