'use client';

import { useEffect, useState } from 'react';

const DISCLAIMER_KEY = 'custodes_legis_disclaimer_accepted';

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(DISCLAIMER_KEY);
    if (!accepted) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(DISCLAIMER_KEY, 'true');
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 400);
  };

  const handleReject = () => {
    window.location.href = 'about:blank';
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 transition-all duration-400 ${
        animateIn ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backdropFilter: 'blur(6px)',
        background: 'rgba(10, 18, 40, 0.88)',
      }}
    >
      {/* ── Modal Card ── */}
      <div
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-500 ${
          animateIn
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-8 opacity-0 scale-95'
        }`}
        style={{
          background: 'linear-gradient(160deg, #0d1b2a 0%, #112240 60%, #0a1628 100%)',
          border: '1px solid rgba(180, 145, 60, 0.35)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(180,145,60,0.12) inset',
          maxHeight: '92vh',
        }}
      >
        {/* Gold top accent bar */}
        <div
          className="shrink-0"
          style={{
            height: '4px',
            background: 'linear-gradient(90deg, #b4913c 0%, #d4af6a 50%, #b4913c 100%)',
          }}
        />

        {/* Header */}
        <div className="shrink-0 px-4 sm:px-8 pt-5 sm:pt-8 pb-3 sm:pb-4 flex items-center gap-3 sm:gap-4">
          {/* Icon — hidden on very small screens to save space */}
          <div
            className="hidden xs:flex shrink-0 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #b4913c22 0%, #d4af6a33 100%)',
              border: '1px solid rgba(180,145,60,0.4)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4af6a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <div className="min-w-0">
            <p
              className="text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase mb-0.5"
              style={{ color: '#d4af6a' }}
            >
              Important Notice
            </p>
            <h2
              className="text-lg sm:text-2xl font-bold text-white leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Welcome to Custodes Legis
            </h2>
            <p
              className="text-xs font-medium tracking-widest uppercase mt-0.5"
              style={{ color: '#8fa8c8' }}
            >
              Disclaimer
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="shrink-0 mx-4 sm:mx-8 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(180,145,60,0.35), transparent)',
          }}
        />

        {/* Scrollable Body */}
        <div
          className="overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 space-y-3 sm:space-y-4 text-xs sm:text-sm leading-relaxed"
          style={{ color: '#b0c4de' }}
        >
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates
            in any form or manner. By accessing this website,{' '}
            <span className="font-semibold" style={{ color: '#d4af6a' }}>
              www.custodeslegis.com
            </span>
            , you acknowledge and confirm that you are seeking information relating to Custodes
            Legis of your own accord and that there has been no form of solicitation,
            advertisement or inducement by Custodes Legis or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and should not be
            interpreted as soliciting or advertisement. No material/information provided on this
            website should be construed as legal advice. Custodes Legis shall not be liable for
            the consequences of any action taken by relying on the material/information provided
            on this website.
          </p>
          <p>
            The contents of this website are the intellectual property of Custodes Legis.
          </p>
        </div>

        {/* Divider */}
        <div
          className="shrink-0 mx-4 sm:mx-8 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(180,145,60,0.35), transparent)',
          }}
        />

        {/* Actions */}
        <div className="shrink-0 px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <p
            className="text-xs hidden sm:block mr-auto"
            style={{ color: '#6b7e96' }}
          >
            Please read the disclaimer carefully before proceeding.
          </p>

          {/* Reject */}
          <button
            id="disclaimer-reject-btn"
            onClick={handleReject}
            className="order-2 sm:order-none w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95"
            style={{
              background: 'transparent',
              border: '1px solid rgba(180,145,60,0.35)',
              color: '#8fa8c8',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(192,57,43,0.15)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(192,57,43,0.5)';
              (e.currentTarget as HTMLButtonElement).style.color = '#e07070';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(180,145,60,0.35)';
              (e.currentTarget as HTMLButtonElement).style.color = '#8fa8c8';
            }}
          >
            Reject
          </button>

          {/* Accept — shown first on mobile via order */}
          <button
            id="disclaimer-accept-btn"
            onClick={handleAccept}
            className="order-1 sm:order-none w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #b4913c 0%, #d4af6a 50%, #b4913c 100%)',
              color: '#0d1b2a',
              boxShadow: '0 4px 20px rgba(180,145,60,0.4)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(212,175,106,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(180,145,60,0.4)';
            }}
          >
            I Accept &amp; Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
