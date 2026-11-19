import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { LANDING_IDENTITY, LANDING_FAQS } from './data';

export const StandaloneFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions: Mold Removal in Oakwood
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential facts about mold removal timelines, testing necessities, and moisture diagnostics in Montgomery
            County properties.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {LANDING_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-teal-400 shadow-md ring-1 ring-teal-200' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                      isOpen ? 'bg-teal-50 text-teal-700 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-teal-700" />
              Have a specific property question?
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Speak directly with a local specialist now.
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              No pressure consultations regarding crawl space dampness, attic condensation, or mold smells.
            </p>
          </div>
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-all duration-200 hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>{LANDING_IDENTITY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
