import { Button } from '@vkontakte/vkui'
import { ReactNode } from 'react'

interface NavButtonProps {
	children: ReactNode,
	onClick: () => void
}

const NavButton = (props: NavButtonProps) => {
    return (
        <Button stretched size='l' mode='secondary' onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default NavButton
