import { FetchButton } from '@/shared/ui'
import { Group, FormItem, Textarea } from '@vkontakte/vkui'
import { useEffect, useRef, useState } from 'react'
import { fetchCatData } from '@/features/FetchCatData'

const CatForm = () => {
    const [catFact, setCatFact] = useState<string>('')
    const textareaRef = useRef<HTMLTextAreaElement>(null)


    const setCursor = () => {
        if (textareaRef.current && catFact !== '') {
            textareaRef.current.focus()
            const cursorPosition = catFact.indexOf(' ')
            textareaRef.current.setSelectionRange(cursorPosition, cursorPosition)
        }
    }

    useEffect(() => {
        setCursor()
    }, [catFact])

    return (
        <Group mode='card' padding='m' style={{minWidth: '30vw'}}>
            <FormItem top='Кото-факт'>
                <Textarea rows={7} value={catFact} getRef={textareaRef} />
            </FormItem>

            <FormItem>
                <FetchButton onClick={() => fetchCatData(setCatFact)}>Get cat fact</FetchButton>
            </FormItem>
        </Group>
    )
}

export default CatForm