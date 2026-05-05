import React from 'react';
import { CheckCircle } from 'phosphor-react';
import Button from '../common/Button';
import './ForAccountants.css';

const ForAccountants = () => {
  const clients = [
    { name: "Obinna Electronics", score: 92, deadline: "Nov 21" },
    { name: "Acme Services Ltd", score: 78, deadline: "Nov 15" },
    { name: "Glo Reload", score: 85, deadline: "Dec 05" },
    { name: "Lagos Bakers", score: 64, deadline: "Nov 30" }
  ];

  return (
    <section className="for-accountants section-padding">
      <div className="container">
        <div className="accountants-panel">
          <div className="accountants-content">
            <span className="eyebrow eyebrow-dark">FOR ACCOUNTANTS</span>
            <h2 className="section-title white">One dashboard. All your clients.</h2>
            <p className="section-subtitle white-70">
              Taaxbro's Accountant Portal gives tax professionals a command centre for managing every client's compliance, filings, and financial health — all in one view.
            </p>
            
            <ul className="accountant-features">
              <li>
                <CheckCircle size={24} color="var(--color-cyan)" weight="fill" />
                <span>See every client's compliance score at a glance</span>
              </li>
              <li>
                <CheckCircle size={24} color="var(--color-cyan)" weight="fill" />
                <span>Bulk-file returns across multiple businesses simultaneously</span>
              </li>
              <li>
                <CheckCircle size={24} color="var(--color-cyan)" weight="fill" />
                <span>Onboard a new client in under 5 minutes</span>
              </li>
            </ul>

            <Button variant="ghost" className="mt-32">
              Explore the Accountant Portal →
            </Button>
          </div>

          <div className="accountants-visual">
            <div className="portal-mockup card-dark">
              <div className="portal-header">
                <span>Accountant Portal</span>
                <span className="portal-badge">PRO</span>
              </div>
              <table className="portal-table">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Score</th>
                    <th>Next Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, i) => (
                    <tr key={i}>
                      <td>{client.name}</td>
                      <td>
                        <span className={`score-val ${client.score > 80 ? 'good' : 'fair'}`}>
                          {client.score}
                        </span>
                      </td>
                      <td>{client.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForAccountants;
