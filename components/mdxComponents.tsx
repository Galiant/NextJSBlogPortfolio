import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import { Callout } from './callout';

interface MdxProps {
  code: string;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
