import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

export { generateMetadata } from './meta';

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col content-center items-center justify-center p-4 py-8">
      <span className="z-10 mb-6 md:fixed md:left-[20px] md:top-[20px]">
        <div className="flex items-end gap-4">
          <Image src={logo} width={36} height={40} alt="" />
          <span className="relative top-[3px] font-coiny text-4xl leading-none text-[--surface-800]">
            TeamTrail
          </span>
        </div>
      </span>
      <div className="w-full max-w-lg">{children}</div>
    </div>
  );
}
