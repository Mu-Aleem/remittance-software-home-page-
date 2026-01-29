import React from 'react';

const WorkingProcess = () => {
  const steps = [
    {
      title: 'Payment Platforms',
      desc: 'Secure, scalable systems for digital payments, wallets, and transaction processing.',
      icon: '📋',
    },
    {
      title: 'Remittance Solutions',
      desc: 'End-to-end software for fast, compliant cross-border money transfers.',
      icon: '🖌️',
    },
    {
      title: 'API & Integrations',
      desc: 'Robust financial APIs connecting banks, fintechs, and third-party services.',
      icon: '🔗',
    },
    {
      title: 'Card Issuing',
      desc: 'Build and launch custom card programs with global reach and financial flexibility.',
      icon: '💳',
    },
  ];

  return (
    <section className="w-full  py-20 bg-white">
      <div className="w-full  bg-process-gradient rounded-[40px] py-20 overflow-hidden">
        <div className="px-6 text-center mb-16">
          <h2 className="font-manrope text-[48px] md:text-5xl font-bold text-white mb-6">
            Our working Process
          </h2>
          <p className="font-nunito text-blue-100 text-[16px] md:text-lg max-w-2xl mx-auto opacity-90">
            A clear, structured approach carefully designed to make every step
            of the journey simple, transparent, and highly effective.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto md:overflow-x-hidden gap-6 px-8 md:px-16 pb-8 snap-x no-scrollbar">
          {steps.map((step, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center bg-white/10 backdrop-blur- rounded-[16px] p-10 flex flex-col items-start transition-all hover:bg-white/15"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-8 text-xl">
                {step.icon}
              </div>

              <h3 className="font-manrope text-2xl font-bold text-white mb-4 whitespace-nowrap">
                {step.title}
              </h3>
              <p className="font-nunito text-blue-50/80 text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
