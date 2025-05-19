export function calculateEMI(principal, annualRate, tenureYears) {
    const r = annualRate / (12 * 100); // monthly interest rate
    const n = tenureYears * 12; // number of months
  
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(2);
  }
  