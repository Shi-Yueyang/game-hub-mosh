import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton >
        <CardBody width='300px'>
            <SkeletonText></SkeletonText>
        </CardBody>
        </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton
