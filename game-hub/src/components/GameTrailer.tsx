import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const firstResult = data?.results[0];
  return firstResult ? (
    <video
      src={firstResult.data[480]}
      poster={firstResult.preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;
