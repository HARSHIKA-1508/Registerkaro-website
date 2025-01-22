import React from 'react';
import  "./StepsToProcess.css";
const StepsToProcess = () => {
    const steps = [
      { icon: "📝", label: "Fill up Application Form" },
      { icon: "💳", label: "Make Online Payment" },
      { icon: "📄", label: "Executive will Process Application" },
      { icon: "📧", label: "Get Confirm Mail" },
    ];
  
    return (
      <section className="steps-to-process">
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <p>{step.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default StepsToProcess;