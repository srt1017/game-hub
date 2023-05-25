import { Card, CardBody, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <>
    <Card width='250px' borderRadius={10} overflow={'hidden'}>
        <Skeleton height={200}></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>

    </Card>
    </>
  )
}

export default GameCardSkeleton
