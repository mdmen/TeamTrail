import { getCurrentYear } from '@/lib/helpers';

export function Footer() {
  return (
    <footer>
      <p className="m-0 text-center">
        © {getCurrentYear()} Dmitry Menovshchikov
      </p>
    </footer>
  );
}
