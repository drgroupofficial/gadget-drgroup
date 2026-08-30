export function ProcessSteps({ steps, columns = false }) {
  return (
    <ol className={`steps${columns ? " cols" : ""}`}>
      {steps.map((step, index) => (
        <li key={index}>
          <div>
            <div className="step-title">{step.title || step}</div>
            {step.description && <div className="step-desc">{step.description}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
