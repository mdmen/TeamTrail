import { type Metadata } from 'next';
import { Button } from 'primereact/button';

export const metadata: Metadata = {
  title: 'Workspaces',
};

export default function WorkspacesPage() {
  return (
    <div className="text-center">
      <h1>You have no workspaces right now</h1>
      <p className="text-xl">But you can join an existing workspace</p>
      <div className="flex">
        <div className="text-left md:w-1/3">
          <div className="h-full overflow-hidden rounded-lg border-2 border-solid border-gray-200 border-opacity-60">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg"
              alt="blog"
            />
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                CATEGORY
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                The Catalyzer
              </h1>
              <p className="mb-3 leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <div className="flex flex-wrap items-center ">
                <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl">Or create you own</p>
      <div>
        <Button type="button" label="Create" />
      </div>
    </div>
  );
}
