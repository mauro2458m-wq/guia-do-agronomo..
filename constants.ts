import React from 'react';

// --- Icon Components ---
const FeijaoIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M16.5 8.25C19.728 9.15 21 12.18 21 16C21 18.9 19.32 21 16 21C12.68 21 11 18.9 11 16C11 12.5 12.9 9.8 15.5 8.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement('path', { d: "M7.5 15.75C4.272 14.85 3 11.82 3 8C3 5.1 4.68 3 8 3C11.32 3 13 5.1 13 8C13 11.5 11.1 14.2 8.5 15.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    )
);
const QuiaboIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M12 2L8 22H16L12 2Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement('path', { d: "M12 2L14 7L12 12L10 7L12 2Z", fill: "currentColor", opacity: "0.3" })
    )
);
const MilhoIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('ellipse', { cx: "12", cy: "12", rx: "6", ry: "10", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M12 2V22", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M6 12C6 7 12 5 12 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M18 12C18 17 12 19 12 19", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M9 10L10 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M14 10L15 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M8 14L9 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M15 14L16 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);
const SojaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement('circle', { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('circle', { cx: "8", cy: "8", r: "1.5", fill: "currentColor", opacity: "0.5" }),
        React.createElement('circle', { cx: "16", cy: "16", r: "1.5", fill: "currentColor", opacity: "0.5" }),
        React.createElement('circle', { cx: "16", cy: "8", r: "1.5", fill: "currentColor", opacity: "0.5" }),
        React.createElement('circle', { cx: "8", cy: "16", r: "1.5", fill: "currentColor", opacity: "0.5" })
    )
);
const TomateIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "12", cy: "14", r: "7", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M12 2V7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M10 4L14 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M8 3L10 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M16 3L14 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);
const BatataIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.5" }),
        React.createElement('path', { d: "M15.5 15.5C16.8807 15.5 18 14.3807 18 13C18 11.6193 16.8807 10.5 15.5 10.5C14.1193 10.5 13 11.6193 13 13C13 14.3807 14.1193 15.5 15.5 15.5Z", fill: "currentColor", opacity: "0.3" }),
        React.createElement('path', { d: "M8.5 8.5C9.88071 8.5 11 7.38071 11 6C11 4.61929 9.88071 3.5 8.5 3.5C7.11929 3.5 6 4.61929 6 6C6 7.38071 7.11929 8.5 8.5 8.5Z", fill: "currentColor", opacity: "0.3" })
    )
);
const LimaoIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('circle', { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M12 2V9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M12 15V22", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M22 12H15", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M9 12H2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);
const CouveIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M12 22C12 22 4 17 4 10C4 5 7 2 12 2C17 2 20 5 20 10C20 17 12 22 12 22Z", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M12 22V10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M4 10C6.66667 11.3333 9.33333 11.3333 12 10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M20 10C17.3333 11.3333 14.6667 11.3333 12 10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);
const LaranjaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M15.5 6.5C15 6.66667 14 7 14 8C14 9 15 9.33333 15.5 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('circle', { cx: "12", cy: "12", r: "4", fill: "currentColor", opacity: "0.3" })
    )
);
const MandiocaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M3 15L15 3L21 9L9 21L3 15Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement('path', { d: "M7 11L13 17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M11 7L17 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M4.5 12.5L5.5 11.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M18.5 10.5L19.5 9.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);
const CocoIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('circle', { cx: "10", cy: "10", r: "1", fill: "currentColor" }),
        React.createElement('circle', { cx: "14", cy: "10", r: "1", fill: "currentColor" }),
        React.createElement('circle', { cx: "12", cy: "14", r: "1", fill: "currentColor" })
    )
);
const MaracujaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "12", cy: "12", r: "8", stroke: "currentColor", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M12 2V4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M12 20V22", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M4 12H2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        React.createElement('path', { d: "M22 12H20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
    )
);

// --- Crop Data ---
export interface CropData {
  name: string;
  Icon: React.FC<{ className?: string }>;
}

export const CROPS: CropData[] = [
  { name: 'Feijão', Icon: FeijaoIcon },
  { name: 'Quiabo', Icon: QuiaboIcon },
  { name: 'Milho', Icon: MilhoIcon },
  { name: 'Soja', Icon: SojaIcon },
  { name: 'Tomate', Icon: TomateIcon },
  { name: 'Batata', Icon: BatataIcon },
  { name: 'Limão', Icon: LimaoIcon },
  { name: 'Couve', Icon: CouveIcon },
  { name: 'Laranja', Icon: LaranjaIcon },
  { name: 'Mandioca', Icon: MandiocaIcon },
  { name: 'Coco', Icon: CocoIcon },
  { name: 'Maracujá', Icon: MaracujaIcon },
];
