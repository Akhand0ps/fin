import React from 'react';
import { cn } from '../lib/utils';

const CURRENCIES = [
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'INR', label: 'INR', symbol: '₹' },
] as const;

type CurrencyCode = 'USD' | 'INR';

interface CurrencySelectorProps {
  /** The startup's chosen base currency — locks all other options */
  startupCurrency: CurrencyCode | undefined;
  /** The currently selected value (from react-hook-form watch) */
  selectedCurrency: CurrencyCode;
  /** Called with the new currency code when user clicks an active option */
  onSelect: (currency: CurrencyCode) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  startupCurrency,
  selectedCurrency,
  onSelect,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">
        Currency
      </label>
      <div className="grid grid-cols-2 gap-3">
        {CURRENCIES.map(({ code, label }) => {
          const isStartupCurrency = code === startupCurrency;
          const isSelected = code === selectedCurrency;
          const isLocked = startupCurrency !== undefined && !isStartupCurrency;

          return (
            <div key={code} className="flex flex-col gap-1">
              <button
                type="button"
                disabled={isLocked}
                onClick={() => !isLocked && onSelect(code)}
                className={cn(
                  'px-4 py-3 rounded-xl border text-xs font-bold transition-all duration-200',
                  isSelected && !isLocked
                    ? 'bg-neutral-900 border-neutral-900 text-white shadow-lg'
                    : isLocked
                    ? 'bg-neutral-50 border-neutral-100 text-neutral-300 cursor-not-allowed opacity-60'
                    : 'bg-neutral-50 border-neutral-100 text-neutral-500 hover:border-neutral-200 cursor-pointer'
                )}
              >
                {label}
              </button>
              {isLocked && (
                <p className="text-[10px] text-neutral-400 text-center leading-tight">
                  Not applicable
                </p>
              )}
            </div>
          );
        })}
      </div>
      {startupCurrency && (
        <p className="text-[10px] text-neutral-400 leading-relaxed">
          Your startup uses{' '}
          <span className="font-bold text-neutral-600">{startupCurrency}</span> as its base
          currency. All transactions must be recorded in this currency to ensure accurate
          analytics.
        </p>
      )}
    </div>
  );
};
