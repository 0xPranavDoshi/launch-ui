import AvatarIcon from './AvatarIcon'
import { styled } from 'solid-styled-components'

export type Color =
  | 'gray'
  | 'grey'
  | 'light'
  | 'purple'
  | 'green'
  | 'turquoise'
  | 'blue-green'
  | 'teal'
  | 'brown'
  | 'primary'
  | 'blue'
  | 'secondary'
  | 'orange'
  | 'yellow'
  | undefined

export type Shape = 'rounded' | 'square'

export type AvatarProps = {
  avatarType?: 'filled-shadow' | 'filled' | 'outlined' | 'outlined-shadow'
  shape?: Shape
  color?: Color
  childType?: 'avatar' | 'image' | 'character'
  imagePath?: string
  alt?: string
  characters?: string
}

export type AvatarStyledProps = {
  childType: AvatarProps['childType']
  backgroundColor: string
  border: string
  borderColor: string
  shape: AvatarProps['shape']
  imageColor: string
  shadow: boolean
}

export const Avatar = (props: AvatarProps) => {
  let backgroundColor = '#0099FF'
  let border = '0px'
  let borderColor = '#0099FF'
  let imageColor = 'white'
  let shadow = false

  if (
    props.avatarType == 'outlined-shadow' ||
    props.avatarType == 'filled-shadow'
  ) {
    shadow = true
  }

  if (props.avatarType == 'filled' || props.avatarType == 'filled-shadow') {
    ;[backgroundColor, imageColor, borderColor] = getFilledColor(props.color)
  }

  if (props.avatarType == 'outlined' || props.avatarType == 'outlined-shadow') {
    border = '2px'
    ;[backgroundColor, imageColor, borderColor] = getOutlinedColor(props.color)
  }

  return (
    <div>
      <StyledDiv
        childType={props.childType}
        backgroundColor={backgroundColor}
        border={border}
        borderColor={borderColor}
        shape={props.shape}
        imageColor={imageColor}
        shadow={shadow}
      >
        {getImage(
          props.childType,
          props.imagePath,
          props.characters,
          props.alt,
          imageColor
        )}
      </StyledDiv>
    </div>
  )
}

const StyledDiv = styled('div')(
  ({
    childType,
    backgroundColor,
    border,
    borderColor,
    shape,
    imageColor,
    shadow,
  }: AvatarStyledProps) => ({
    width: '5rem',
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: backgroundColor,
    borderWidth: border,
    borderColor: borderColor,
    color: imageColor,
    borderRadius: shape == 'square' ? '1.5rem' : '50%',
    fontSize: childType == 'character' ? '1.5rem' : '1rem',
    boxShadow: shadow
      ? '0px 2px 4px rgba(18, 17, 17, 0.04), 0px 8px 16px rgba(113, 112, 112, 0.16)'
      : 'none',
  })
)

function getImage(
  childType: AvatarProps['childType'],
  imagePath: AvatarProps['imagePath'],
  characters: AvatarProps['characters'],
  alt: AvatarProps['alt'],
  imageColor: string
) {
  let icon = <AvatarIcon color={imageColor} />
  if (childType == 'image') {
    icon = <img width="100%" src={imagePath} alt={alt || 'Avatar'} />
  }
  if (childType == 'character') {
    icon = characters
  }

  return icon
}

function getOutlinedColor(color: Color) {
  let backgroundColor = '#E5F5FF'
  let borderColor = '#0099FF'
  let imageColor = '0099FF'

  if (color !== undefined) {
    switch (color) {
      case 'gray':
      case 'light':
      case 'grey':
        backgroundColor = '#F5F2F2'
        borderColor = '#EBE4E4'
        imageColor = '#0099FF'
        break

      case 'purple':
        backgroundColor = '#EFDBFF'
        borderColor = '#531DAB'
        imageColor = '#531DAB'
        break

      case 'green':
        backgroundColor = '#D9F7BE'
        borderColor = '#389E0D'
        imageColor = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        backgroundColor = '#B5F5EC'
        borderColor = '#08979C'
        imageColor = '#08979C'
        break

      case 'brown':
        backgroundColor = '#EBE4E4'
        borderColor = '#B2A1A1'
        imageColor = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        backgroundColor = '#E5F5FF'
        borderColor = '#0099FF'
        imageColor = '#0099FF'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        backgroundColor = '#FFF8ED'
        borderColor = '#F2A71B'
        imageColor = '#F2A71B'
        break

      default:
        backgroundColor = '#E5F5FF'
        borderColor = '#0099FF'
        imageColor = '#0099FF'
        break
    }
  }

  return [backgroundColor, imageColor, borderColor]
}

function getFilledColor(color: Color) {
  let backgroundColor = '#0099FF'
  let borderColor = '#0099FF'
  let imageColor = 'white'

  if (color !== undefined) {
    switch (color) {
      case 'gray':
      case 'light':
      case 'grey':
        backgroundColor = '#F5F2F2'
        imageColor = '#0099FF'
        break

      case 'purple':
        backgroundColor = '#EFDBFF'
        imageColor = '#531DAB'
        break

      case 'green':
        backgroundColor = '#D9F7BE'
        imageColor = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        backgroundColor = '#B5F5EC'
        imageColor = '#08979C'
        break

      case 'brown':
        backgroundColor = '#EBE4E4'
        imageColor = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        backgroundColor = '#0099FF'
        imageColor = 'white'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        backgroundColor = '#F2A71B'
        imageColor = 'white'
        break

      default:
        backgroundColor = '#E5F5FF'
        imageColor = '#0099FF'
        break
    }
  }

  return [backgroundColor, imageColor, borderColor]
}
