const PricingSection = () => {
    const plans = [
      {
        title: 'Basic Tutoring',
        price: '$49/mo',
        features: [
          '1× 1‑on‑1 Session Weekly',
          'Access to Community Forum',
          'Email Support',
          'Curated Learning Resources',
          'Monthly Progress Report',
          'Awarded Certificate of Completion',
        ],
        isPopular: false
      },
      {
        title: 'Pro Tutoring',
        price: '$99/mo',
        features: [
          '3× 1‑on‑1 Sessions Weekly',
          'Priority Email Support',
          'Resume & Portfolio Review',
          'Live Coding Workshops',
          'Community Slack Channel',
          'Awarded Certificate of Completion',
        ],
        isPopular: true
      },
      {
        title: 'Custom Training',
        price: 'Contact Us',
        features: [
          'Dedicated Mentor Hours',
          'Custom Curriculum Design',
          'Team / Cohort Discounts',
          'On‑Demand Code Reviews',
          'Weekly Progress Reports',
        ],
        isPopular: false
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Pricing plan made for your learning journey
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into hands‑on web development tutoring with personalized plans  
            that fit your goals—whether you’re just getting started or leveling up as a team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                plan.isPopular ? 'bg-gray-50 shadow-lg' : 'bg-white shadow-md'
              }`}
            >
              <h2 className="text-3xl font-semibold mb-4 text-primary">{plan.title}</h2>
              <div className="text-2xl font-bold mb-8 text-gray-600">{plan.price}</div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2 text-xl">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-6 rounded-lg transition-colors duration-200 ${
                  plan.isPopular
                    ? 'bg-primary  text-white hover:bg-gray-800'
                    : 'border-2 border-black text-black hover:bg-gray-900 hover:text-white'
                }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function Pricing() {
    return (
      <div className="min-h-screen w-full bg-white">
        <PricingSection />
        <br /><br /><br />
      </div>
    );
  }
  
  export default Pricing;
  