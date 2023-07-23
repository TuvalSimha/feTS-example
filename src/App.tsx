import { useState } from "react";
import { useQuery } from "react-query";
import "./index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { PlayerSheet } from "./components/player-sheet";
import { fetchAllClubs, fetchClubInfo } from "./fets/endpoint";
import { Club, Player } from "./helpers";
import { Header } from "./components/header";
import { TeamsCards } from "./components/teams-crads";



export function App() {
  const [selectedClub, setSelectedClub] = useState<Club | undefined>(undefined);
  const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>(
    undefined
  );

  const { data: clubData } = useQuery("Clubs", fetchAllClubs);
  const playerData = useQuery({
    queryKey: ["Players", selectedClub?.TeamId],
    queryFn: () => fetchClubInfo(String(selectedClub?.TeamId)),
  });

  function handlePlayerClick(player: Player) {
    setCurrentPlayer(player);
    console.log(player);
  }

  return (
    <>
      <Header clubData={clubData} setSelectedClub={setSelectedClub} />
      {!selectedClub && (
        <TeamsCards clubData={clubData} setSelectedClub={setSelectedClub} />
      )}
      {selectedClub && (
        <Table>
          <TableHeader className="top-0 sticky">
            <TableRow className="bg-gray-200">
              <TableHead className="w-[100px] text-black">Avatar</TableHead>
              <TableHead className="w-[100px] text-black">ID</TableHead>
              <TableHead className="w-[100px] text-black">First Name</TableHead>
              <TableHead className="w-[100px] text-black">Last Name</TableHead>
              <TableHead className="w-[100px] text-black">
                Date of Birthday
              </TableHead>
              <TableHead className="w-[100px] text-black">Height</TableHead>
              <TableHead className="w-[100px] text-black">Foot</TableHead>
              <TableHead className="w-[100px] text-black">Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {playerData.data?.map((player) => (
              <TableRow
                key={player.PlayerId}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handlePlayerClick(player)}
              >
                <TableCell className="font-medium">
                  <Avatar>
                    <AvatarImage
                      src={player.PhotoUrl}
                      alt={player.CommonName}
                    />
                    <AvatarFallback>{player.ShortName}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{player.PlayerId}</TableCell>
                <TableCell className="font-medium">
                  {player.FirstName}
                </TableCell>
                <TableCell className="font-medium">{player.LastName}</TableCell>
                <TableCell className="font-medium">
                  {String(player.BirthDate).slice(0, 10)}
                </TableCell>
                <TableCell className="font-medium">{player.Height}</TableCell>
                <TableCell className="font-medium">{player.Foot}</TableCell>
                <TableCell className="font-medium">{player.Position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {currentPlayer && (
        <PlayerSheet
          currentPlayer={currentPlayer}
          setCurrentPlayer={() => setCurrentPlayer(undefined)}
        />
      )}
    </>
  );
}
