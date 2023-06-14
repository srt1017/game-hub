/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardBody, Heading, HStack, Image, transform } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card h={'full'}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <PlatformIconList platforms={game.parent_platforms?.map((p: { platform: any }) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
