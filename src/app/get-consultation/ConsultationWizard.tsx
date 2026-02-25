"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

/* ─── Types ─────────────────────────────────────────────────── */
type FormData = {
  businessType: string;
  setupReason: string;
  shareholders: string;
  residenceVisas: string;
  officeType: string;
  jurisdiction: string;
  livingInUAE: string;
  startTimeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  dependantVisas: string;
};

/* ─── Static data ─────────────────────────────────────────────── */
const businessTypes = [
  { id: 'consulting', label: 'Consulting & Professional Services', desc: 'Consulting, Recruitment, Business Accelerator', icon: 'BriefcaseIcon' },
  { id: 'technology', label: 'Technology & IT', desc: 'Technology, Telecommunications, Communications', icon: 'CpuChipIcon' },
  { id: 'ecommerce', label: 'E-Commerce & Retail', desc: 'E-commerce, Retail, Apparel, Electronics', icon: 'ShoppingBagIcon' },
  { id: 'trading', label: 'Trading & Import/Export', desc: 'Shipping, Machinery, Chemicals, Manufacturing', icon: 'TruckIcon' },
  { id: 'food', label: 'Food & Hospitality', desc: 'Food & Beverage, Hospitality, Recreation', icon: 'BuildingStorefrontIcon' },
  { id: 'construction', label: 'Construction & Real Estate', desc: 'Construction, Engineering, Environmental', icon: 'HomeModernIcon' },
];

const setupReasons = [
  { id: 'new', label: 'New company formation', icon: 'PlusCircleIcon' },
  { id: 'expansion', label: 'Expansion plan (ie. new branch or franchise)', icon: 'ArrowTrendingUpIcon' },
  { id: 'relocation', label: 'Company relocation', icon: 'ArrowsRightLeftIcon' },
  { id: 'visa', label: 'Visa purposes only', icon: 'IdentificationIcon' },
];

const officeTypes = [
  { id: 'virtual', label: 'Virtual Office', desc: 'Work from anywhere — lightest cost', icon: 'ComputerDesktopIcon' },
  { id: 'physical', label: 'Physical Office', desc: 'Dedicated private office space', icon: 'BuildingOfficeIcon' },
  { id: 'shopfront', label: 'Shop Front', desc: 'Retail or customer-facing space', icon: 'BuildingStorefrontIcon' },
  { id: 'businesscentre', label: 'Business Centre', desc: 'Shared workspace and meeting rooms', icon: 'UserGroupIcon' },
  { id: 'warehouse', label: 'Warehouse', desc: 'Industrial or storage space', icon: 'ArchiveBoxIcon' },
];

const jurisdictions = [
  { id: 'freezone', label: 'Free Zone', desc: 'International clients, e-commerce, consulting, tech', icon: 'GlobeAltIcon' },
  { id: 'mainland', label: 'Mainland', desc: 'Local UAE market, government contracts, retail', icon: 'MapPinIcon' },
  { id: 'notsure', label: 'Not Sure Yet', desc: "We'll compare both options for you", icon: 'QuestionMarkCircleIcon' },
];

const nationalities = [
  'American', 'British', 'Canadian', 'Australian', 'German', 'French',
  'Indian', 'Pakistani', 'Bangladeshi', 'Chinese', 'Russian', 'Turkish',
  'Emirati', 'Saudi Arabian', 'Egyptian', 'Lebanese', 'Jordanian', 'Syrian',
  'Filipino', 'Indonesian', 'Malaysian', 'Nigerian', 'South African', 'Kenyan',
  'Brazilian', 'Argentine', 'Mexican', 'Italian', 'Spanish', 'Dutch', 'Other',
];

const STEPS = [
  { id: 1, label: 'Business Type', icon: 'BriefcaseIcon' },
  { id: 2, label: 'Setup Details', icon: 'DocumentTextIcon' },
  { id: 3, label: 'Office Space', icon: 'BuildingOfficeIcon' },
  { id: 4, label: 'Location & Timeline', icon: 'MapPinIcon' },
  { id: 5, label: 'Your Details', icon: 'UserCircleIcon' },
];

const TRUST_ITEMS = [
  { icon: 'ShieldCheckIcon', text: 'Government approved advisor' },
  { icon: 'ClockIcon', text: '24-hour proposal delivery' },
  { icon: 'CheckBadgeIcon', text: '500+ companies launched' },
];

/* ─── Helper: label for completed step ──────────────────────── */
function getStepSummary(step: number, data: FormData): string | null {
  switch (step) {
    case 1: return businessTypes.find((t) => t.id === data.businessType)?.label.split(' & ')[0] ?? null;
    case 2: return data.setupReason ? setupReasons.find((r) => r.id === data.setupReason)?.label.split(' ')[0] ?? null : null;
    case 3: return officeTypes.find((t) => t.id === data.officeType)?.label ?? null;
    case 4: return jurisdictions.find((j) => j.id === data.jurisdiction)?.label ?? null;
    case 5: return data.firstName ? `${data.firstName} ${data.lastName}`.trim() : null;
    default: return null;
  }
}

/* ─── Step completion check ──────────────────────────────────── */
function isStepComplete(step: number, data: FormData): boolean {
  switch (step) {
    case 1: return !!data.businessType;
    case 2: return !!(data.setupReason && data.shareholders && data.residenceVisas);
    case 3: return !!data.officeType;
    case 4: return !!(data.jurisdiction && data.livingInUAE && data.startTimeline);
    case 5: return !!(data.firstName && data.lastName && data.email && data.phone && data.nationality && data.dependantVisas);
    default: return false;
  }
}

/* ─── Reusable selection card ────────────────────────────────── */
function OptionCard({
  selected,
  onClick,
  icon,
  label,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  desc?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-start gap-3.5 w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 ${
        selected
          ? 'border-blue-600 bg-blue-50/80 shadow-sm'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
          selected ? 'bg-blue-600' : 'bg-slate-100 group-hover:bg-slate-200'
        }`}
      >
        <Icon name={icon} size={16} variant="outline" className={selected ? 'text-white' : 'text-slate-500'} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-tight ${selected ? 'text-blue-700' : 'text-slate-800'}`}>
          {label}
        </p>
        {desc && <p className="text-xs text-slate-400 mt-0.5 leading-snug">{desc}</p>}
      </div>
      {selected && (
        <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-blue-600 flex-shrink-0 mt-0.5" />
      )}
    </button>
  );
}

/* ─── CounterGrid ────────────────────────────────────────────── */
function CounterGrid({ values, selected, onSelect }: { values: string[]; selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onSelect(n)}
          className={`w-11 h-11 rounded-xl border-2 text-sm font-bold transition-all duration-200 ${
            selected === n
              ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50'
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

/* ─── TogglePill ─────────────────────────────────────────────── */
function TogglePill({ options, selected, onSelect }: { options: string[]; selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
            selected === opt
              ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ─── Step 1 ─────────────────────────────────────────────────── */
function Step1({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step 1 of 5</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
        What type of business are you setting up?
      </h2>
      <p className="text-slate-400 text-sm mb-7">Select the category that best matches your business activity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {businessTypes.map((type) => (
          <OptionCard
            key={type.id}
            selected={data.businessType === type.id}
            onClick={() => update('businessType', type.id)}
            icon={type.icon}
            label={type.label}
            desc={type.desc}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Step 2 ─────────────────────────────────────────────────── */
function Step2({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step 2 of 5</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Tell us about your setup</h2>
        <p className="text-slate-400 text-sm">Your answers help us build an accurate proposal.</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 mb-3">
          What is your main reason for setting up a company in the UAE?
        </p>
        <div className="space-y-2.5">
          {setupReasons.map((r) => (
            <OptionCard
              key={r.id}
              selected={data.setupReason === r.id}
              onClick={() => update('setupReason', r.id)}
              icon={r.icon}
              label={r.label}
            />
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-3">How many owners / shareholders?</p>
          <CounterGrid
            values={['1', '2', '3', '4', '5', '6', '7', '8']}
            selected={data.shareholders}
            onSelect={(v) => update('shareholders', v)}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-3">How many residence visas do you need?</p>
          <CounterGrid
            values={['0', '1', '2', '3', '4', '5', '6', '7']}
            selected={data.residenceVisas}
            onSelect={(v) => update('residenceVisas', v)}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3 ─────────────────────────────────────────────────── */
function Step3({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step 3 of 5</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">What type of office space do you need?</h2>
      <p className="text-slate-400 text-sm mb-7">
        This is a key factor in calculating your total setup cost.
      </p>
      <div className="space-y-3">
        {officeTypes.map((type) => (
          <OptionCard
            key={type.id}
            selected={data.officeType === type.id}
            onClick={() => update('officeType', type.id)}
            icon={type.icon}
            label={type.label}
            desc={type.desc}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Step 4 ─────────────────────────────────────────────────── */
function Step4({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  const timelines = [
    { id: 'this_month', label: 'This Month' },
    { id: 'next_month', label: 'Next Month' },
    { id: '3_months', label: '3 Months' },
    { id: '6_months', label: '6 Months' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step 4 of 5</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Location & Timeline</h2>
        <p className="text-slate-400 text-sm">These details shape your proposal.</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 mb-3">Preferred Jurisdiction</p>
        <div className="space-y-3">
          {jurisdictions.map((j) => (
            <OptionCard
              key={j.id}
              selected={data.jurisdiction === j.id}
              onClick={() => update('jurisdiction', j.id)}
              icon={j.icon}
              label={j.label}
              desc={j.desc}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 mb-3">Are you currently living in the UAE?</p>
        <TogglePill options={['Yes', 'No']} selected={data.livingInUAE} onSelect={(v) => update('livingInUAE', v)} />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 mb-3">When do you plan to start?</p>
        <div className="grid grid-cols-2 gap-3">
          {timelines.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => update('startTimeline', t.id)}
              className={`py-3.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                data.startTimeline === t.id
                  ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5 ─────────────────────────────────────────────────── */
function Step5({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  const inputCls =
    'w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/8 transition-all bg-white';
  const labelCls = 'block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2';

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Step 5 of 5</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Your business setup estimate is ready!</h2>
        <p className="text-slate-400 text-sm">
          Enter your details to receive your tailored proposal instantly.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>First Name</label>
          <input type="text" value={data.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="John" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Last Name</label>
          <input type="text" value={data.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Doe" required className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Email</label>
        <input type="email" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="john@company.com" required className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Phone</label>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-4 border-2 border-slate-200 rounded-xl bg-slate-50 text-sm font-bold text-slate-600 flex-shrink-0">
            <Icon name="PhoneIcon" size={13} variant="outline" className="text-slate-400" />
            +971
          </div>
          <input type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)} placeholder="50 123 4567" required className={`${inputCls} flex-1`} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Nationality</label>
        <div className="relative">
          <select
            value={data.nationality}
            onChange={(e) => update('nationality', e.target.value)}
            required
            className={`${inputCls} appearance-none pr-10`}
          >
            <option value="">Select your nationality</option>
            {nationalities.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          <Icon name="ChevronDownIcon" size={15} variant="outline" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className={labelCls}>Need Dependant Visas?</label>
        <TogglePill options={['Yes', 'No']} selected={data.dependantVisas} onSelect={(v) => update('dependantVisas', v)} />
      </div>
    </div>
  );
}

/* ─── Sidebar step item ──────────────────────────────────────── */
function SidebarStep({
  step,
  currentStep,
  data,
  onClick,
}: {
  step: typeof STEPS[number];
  currentStep: number;
  data: FormData;
  onClick: () => void;
}) {
  const completed = isStepComplete(step.id, data);
  const isActive = step.id === currentStep;
  const isPast = step.id < currentStep;
  const summary = isPast && completed ? getStepSummary(step.id, data) : null;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={step.id > currentStep}
      className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group disabled:cursor-not-allowed ${
        isActive ? 'bg-blue-50 border border-blue-100' : 'hover:bg-slate-50 border border-transparent'
      }`}
    >
      {/* Circle indicator */}
      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
        completed && isPast
          ? 'bg-emerald-500'
          : isActive
          ? 'bg-blue-600'
          : 'bg-slate-200'
      }`}>
        {completed && isPast ? (
          <Icon name="CheckIcon" size={13} variant="outline" className="text-white" />
        ) : isActive ? (
          <span className="text-xs font-bold text-white">{step.id}</span>
        ) : (
          <span className="text-xs font-semibold text-slate-400">{step.id}</span>
        )}
      </div>

      {/* Label + summary */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-tight ${
          isActive ? 'text-blue-700' : isPast && completed ? 'text-slate-700' : 'text-slate-400'
        }`}>
          {step.label}
        </p>
        {summary && (
          <p className="text-xs text-slate-400 mt-0.5 truncate">{summary}</p>
        )}
      </div>

      {isActive && (
        <Icon name="ChevronRightIcon" size={14} variant="outline" className="text-blue-400 flex-shrink-0 mt-1" />
      )}
    </button>
  );
}

/* ─── Main Wizard ────────────────────────────────────────────── */
export default function ConsultationWizard() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    setupReason: '',
    shareholders: '',
    residenceVisas: '',
    officeType: '',
    jurisdiction: '',
    livingInUAE: '',
    startTimeline: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    dependantVisas: '',
  });

  const update = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const goTo = (target: number) => {
    if (target < step || isStepComplete(target - 1, formData)) {
      setDirection(target > step ? 1 : -1);
      setStep(target);
    }
  };

  const goNext = () => {
    if (step < 5) { setDirection(1); setStep((s) => s + 1); }
  };
  const goBack = () => {
    if (step > 1) { setDirection(-1); setStep((s) => s - 1); }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const canProceed = isStepComplete(step, formData);
  const completedCount = STEPS.filter((s) => isStepComplete(s.id, formData)).length;
  const progressPct = (completedCount / 5) * 100;

  useEffect(() => {
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step])

  return (
    <div className="h-screen bg-slate-100 flex flex-col overflow-hidden">

      {/* ── Top bar ── */}
      <header className="bg-white border-b border-slate-100 px-6 h-16 flex items-center justify-between flex-shrink-0 z-20">
        <Link href="/">
          <Image src="/logo.png" alt="Bridgemena" width={120} height={36} />
        </Link>
        <a
          href="tel:+97140000000"
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
            <Icon name="PhoneIcon" size={14} variant="outline" className="text-blue-600" />
          </div>
          <span className="hidden sm:block">+971 4 000 0000</span>
        </a>
      </header>

      {/* ── Mobile step bar ── */}
      <div className="lg:hidden bg-white border-b border-slate-100 px-5 py-3 flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="text-xs font-bold text-slate-400 flex-shrink-0 tabular-nums">
          {completedCount} / 5
        </span>
      </div>

      {/* ── Layout ── */}
      <div className="flex-1 flex overflow-hidden">

        {/* ── Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-96 xl:w-[420px] bg-white border-r border-slate-200 shadow-[4px_0_24px_-4px_rgba(0,0,0,0.08)] flex-shrink-0 z-10">

          {/* Progress bar */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Progress</span>
              <span className="text-xs font-bold text-blue-600">{Math.round(progressPct)}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Step list */}
          <nav className="flex-1 px-3 space-y-1 overflow-hidden">
            {STEPS.map((s) => (
              <SidebarStep
                key={s.id}
                step={s}
                currentStep={step}
                data={formData}
                onClick={() => goTo(s.id)}
              />
            ))}
          </nav>

          {/* Dubai image card */}
          <div className="m-4 rounded-2xl overflow-hidden relative h-44 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
              alt="Dubai skyline"
              fill
              className="object-cover object-center"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-0.5">Bridgemena</p>
              <p className="text-sm font-bold text-white leading-tight">UAE & KSA Market Entry Experts</p>
            </div>
          </div>

          {/* Trust */}
          <div className="px-5 pb-6 space-y-2.5 border-t border-slate-100 pt-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.icon} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={13} variant="outline" className="text-blue-600" />
                </div>
                <span className="text-xs text-slate-500 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto">
          <div className="flex min-h-full">

            {/* ── Form column ── */}
            <div className="flex-1 min-w-0 px-8 xl:px-12 py-10 lg:py-12">
              {!submitted ? (
                <>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {step === 1 && <Step1 data={formData} update={update} />}
                      {step === 2 && <Step2 data={formData} update={update} />}
                      {step === 3 && <Step3 data={formData} update={update} />}
                      {step === 4 && <Step4 data={formData} update={update} />}
                      {step === 5 && <Step5 data={formData} update={update} />}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 mt-10 pt-8 border-t border-slate-200">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
                      >
                        <Icon name="ArrowLeftIcon" size={14} variant="outline" />
                        Back
                      </button>
                    )}
                    <div className="flex-1" />
                    {step < 5 ? (
                      <motion.button
                        type="button"
                        onClick={goNext}
                        disabled={!canProceed}
                        whileHover={canProceed ? { scale: 1.02 } : {}}
                        whileTap={canProceed ? { scale: 0.97 } : {}}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                          canProceed
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        Continue
                        <Icon name="ArrowRightIcon" size={14} variant="outline" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canProceed || isSubmitting}
                        whileHover={canProceed && !isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={canProceed && !isSubmitting ? { scale: 0.97 } : {}}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                          canProceed && !isSubmitting
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="ArrowPathIcon" size={14} variant="outline" className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Free Proposal
                            <Icon name="PaperAirplaneIcon" size={14} variant="outline" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 text-center mt-5 flex items-center justify-center gap-1.5">
                    <Icon name="LockClosedIcon" size={11} variant="outline" className="text-slate-300" />
                    Your information is secure and will never be shared.
                  </p>
                </>
              ) : (
                /* ── Success ── */
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 18 }}
                    className="w-20 h-20 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6"
                  >
                    <Icon name="CheckCircleIcon" size={40} variant="solid" className="text-emerald-500" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Proposal on its way, {formData.firstName}!</h2>
                  <p className="text-slate-500 text-sm mb-1 max-w-sm mx-auto">
                    We're preparing your personalised business setup estimate.
                  </p>
                  <p className="text-slate-400 text-xs mb-10">
                    Our team will follow up within 24 hours to walk you through the next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                    >
                      <Icon name="HomeIcon" size={15} variant="outline" className="text-white" />
                      Back to Homepage
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all"
                    >
                      Talk to an Expert
                      <Icon name="PhoneIcon" size={15} variant="outline" />
                    </Link>
                  </div>
                  <div className="mt-12 pt-10 border-t border-slate-100 grid grid-cols-3 gap-8">
                    {[
                      { icon: 'BuildingOffice2Icon', value: '500+', label: 'Companies Formed' },
                      { icon: 'ClockIcon', value: '15+', label: 'Years Experience' },
                      { icon: 'MapPinIcon', value: '50+', label: 'Free Zones' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-2">
                          <Icon name={stat.icon} size={18} variant="outline" className="text-blue-600" />
                        </div>
                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Right info panel ── */}
            <div className="hidden xl:flex flex-col w-[320px] 2xl:w-[360px] flex-shrink-0 py-10 pr-8 gap-5">

              {/* What's included */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name="DocumentTextIcon" size={16} variant="outline" className="text-blue-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">What's in your proposal</p>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Free Zone vs Mainland comparison',
                    'Full setup cost breakdown',
                    'Visa & licensing requirements',
                    'Estimated timeline to launch',
                    'Dedicated advisor assignment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="CheckIcon" size={10} variant="outline" className="text-emerald-600" />
                      </div>
                      <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What happens next */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name="ArrowPathIcon" size={16} variant="outline" className="text-blue-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">What happens next</p>
                </div>
                <div className="space-y-4">
                  {[
                    { step: '1', icon: 'PaperAirplaneIcon', title: 'Submit your details', desc: 'Complete the 5-step form', color: 'bg-blue-600' },
                    { step: '2', icon: 'CpuChipIcon', title: 'Proposal prepared', desc: 'Ready within 2 hours', color: 'bg-violet-500' },
                    { step: '3', icon: 'PhoneIcon', title: 'Expert follow-up', desc: 'Call within 24 hours', color: 'bg-emerald-500' },
                  ].map((item, i, arr) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon name={item.icon} size={13} variant="outline" className="text-white" />
                        </div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-slate-100 mt-1.5 mb-0" />}
                      </div>
                      <div className="pb-4">
                        <p className="text-xs font-bold text-slate-800">{item.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-600/20">
                <Icon name="ChatBubbleLeftEllipsisIcon" size={22} variant="solid" className="text-blue-300 mb-4" />
                <p className="text-sm text-white/90 leading-relaxed mb-5">
                  "Bridgemena made our Dubai setup seamless. Free zone selection, trade licence, visa approvals — all handled in 5 days."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="UserCircleIcon" size={20} variant="solid" className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Ahmed K.</p>
                    <p className="text-xs text-blue-200">CEO, TechVenture Dubai</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
