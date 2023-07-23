import { Club } from "../helpers";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
} from "./ui/menubar";

interface HeaderProps {
  clubData: Club[] | undefined;
  setSelectedClub: (club: Club | undefined) => void;
}

export function Header({ clubData, setSelectedClub }: HeaderProps) {
  return (
    <header className="text-gray-600 bg-gray-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          onClick={() => setSelectedClub(undefined)}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          LOGO HERE
          <span className="ml-3 text-xl">NAME HERE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Premier League Clubs</MenubarTrigger>
              <MenubarContent>
                {clubData?.map((club) => (
                  <MenubarItem
                    key={club.Key}
                    onClick={() => setSelectedClub(club)}
                  >
                    {club.Name}
                    <MenubarShortcut>
                      <img
                        src={club.WikipediaLogoUrl}
                        alt={club.Key}
                        height={20}
                        width={20}
                      />
                    </MenubarShortcut>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
      </div>
    </header>
  );
}
