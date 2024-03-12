import { Button } from '@vkontakte/vkui'
import { ReactNode } from 'react'

interface FetchButtonProps {
	children: ReactNode,
	onClick: () => void
}

const FetchButton = (props: FetchButtonProps) => {
    return (
        <Button appearance='accent' stretched={true} size='l' onClick={props.onClick} type='submit'>
            {props.children}
        </Button>
    )
}

export default FetchButton