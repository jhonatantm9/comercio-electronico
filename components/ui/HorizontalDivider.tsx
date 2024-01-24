interface HorizontalDividerProps {
  color?: string;
}

const HorizontalDivider = ({ color }: HorizontalDividerProps) => {
  if (color) {
    return <div className={`w-full h-0.5 bg-${color}`} />;
  } else {
    return <div className={`w-full h-0.5 bg-slate-900`} />;
  }
};

export { HorizontalDivider };
