import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find workspace',
};

interface Item {
  name: string;
  code: string;
  description?: string;
  image?: string;
  badges?: string[];
}

const items: Item[] = [
  {
    name: 'Workspace 1',
    code: 'asdasd1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image:
      'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    badges: ['test', 'test 1'],
  },
  {
    name: 'Workspace 1',
    code: 'asdasd2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image:
      'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    badges: ['test', 'test 1'],
  },
  {
    name: 'Workspace 1',
    code: 'asdasd3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image:
      'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    badges: ['test', 'test 1'],
  },
];

export default function FindWorkspacePage() {
  return (
    <div className="w-[80rem] max-w-full">
      <h1 className="text-center">Find the workspace to join</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6">
        {items.map(({ name, code, description, image, badges }) => (
          <Link key={code} href="/">
            <div className="h-full overflow-hidden rounded-lg border-2 border-solid border-gray-200 border-opacity-60">
              {!!image && (
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  alt=""
                />
              )}
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                  some text
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  {name}
                </h1>
                <p className="mb-3 leading-relaxed">{description}</p>
                <div className="flex flex-wrap items-center ">
                  Learn More 🤔
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
