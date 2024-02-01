import Link from "next/link";
import { INFO } from "~/shared/lib";

const Header = () => {
  return (
    <header className="px-[20px]">
      <nav className="w-full py-[20px]">
        <ul className="flex w-full gap-[20px]">
          {INFO.pages.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-2xl font-bold hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
