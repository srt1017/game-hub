import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt="Game screenshot"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
