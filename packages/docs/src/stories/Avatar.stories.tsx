import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@luc4sdev-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/luc4sdev.png',
        alt: 'Lucas Pereira'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}

