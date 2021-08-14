import { Flex, Heading } from '@chakra-ui/react'

interface Props {
  title: string;
  style: any;
}

export const Hero = ({ title, style }: Props) => (
  
    <Heading size="3xl"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        style={{...style}}
     >{title}</Heading>
)

Hero.defaultProps = {
  title: 'Unnamed hero',
  style: {}
}
