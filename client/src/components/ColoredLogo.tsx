export enum LogoSizes {
  Tiny = 'tiny',
  Small = 'small',
  Meduim = 'meduim',
  Large = 'large'
}
type ColoredLogoProp = {
  size: LogoSizes;
  color: string;
  bkcolor: string;
};
const ColoredLogo = ({ size, color, bkcolor }: ColoredLogoProp) => {
  return (
    <div
      className={`kc-colored-logo kc-colored-logo--${size}`}
      style={{ color: color, backgroundColor: bkcolor }}>
      KC
    </div>
  );
};

export default ColoredLogo;
