import { Player } from "../helpers";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

interface PlayerSheetProps {
  currentPlayer: Player;
  setCurrentPlayer: () => void;
}

export function PlayerSheet({
  currentPlayer,
  setCurrentPlayer,
}: PlayerSheetProps) {
  return (
    <Sheet open={!!currentPlayer} onOpenChange={() => setCurrentPlayer()}>
      <SheetContent className="bg-gray-100">
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-row gap-3 justify-center">
              <Avatar>
                <AvatarImage
                  src={currentPlayer.PhotoUrl}
                  alt={currentPlayer.CommonName}
                />
                <AvatarFallback>{currentPlayer.ShortName}</AvatarFallback>
              </Avatar>
              {currentPlayer.CommonName}
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="overflow-y-auto h-screen mb-10">
              <div className="w-full mb-6 mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.FirstName} {currentPlayer.LastName}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Place of birth
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.BirthCity}, {currentPlayer.BirthCountry}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Birth date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.BirthDate?.slice(0, 10)}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Use Foot
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Foot}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Gender}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Height
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Height}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Injury Body Part
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.InjuryBodyPart}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Injury Notes
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.InjuryNotes}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Injury Status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.InjuryStatus}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Nationality
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Nationality}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Position
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Position}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Position Category
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.PositionCategory}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Last Updated
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Updated}
                    </dd>
                  </div>
                  <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Weight
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {currentPlayer.Weight}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
