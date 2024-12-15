import { SvgProps } from "react-native-svg";
type DefaultName = keyof typeof import('./icons');

type ToKebabCase<S extends string> =
  S extends `${infer First}${infer Rest}`
  ? Rest extends `${infer Digit}${infer R}` // Check if next char is a digit
  ? Digit extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  ? `${Lowercase<First>}-${Digit}${ToKebabCase<R>}`
  : Rest extends Uncapitalize<Rest>
  ? `${Lowercase<First>}${ToKebabCase<Rest>}`
  : `${Lowercase<First>}-${ToKebabCase<Rest>}`
  : `${Lowercase<First>}`
  : S;

type IconName = {
  [K in DefaultName]: ToKebabCase<K extends `Svg${infer Name}` ? Name : K>;
}[DefaultName];

type Name = ToKebabCase<DefaultName>;

declare interface UntitledIconProps extends Omit<SvgProps, 'width' | 'height'> {
  name: IconName;
  size?: number | string;
  color?: string;
  [key: string]: any;
}
declare const UntitledIcon: React.FC<UntitledIconProps>;
export default UntitledIcon;
