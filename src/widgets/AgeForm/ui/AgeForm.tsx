import { FetchButton } from '@/shared/ui'
import { Group, FormItem, Input } from '@vkontakte/vkui'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { fetchAgeData } from '@/features/FetchAgeData'


const AgeForm = () => {
    const [name, setName] = useState<string>('')
    const [debouncedName] = useDebounce(name, 3000)
    const [age, setAge] = useState<number>()
    const [prevName, setPrevName] = useState<string>('')
    const [controller, setController] = useState(new AbortController())
    const [nameError, setNameError] = useState<string | null>(null)


    const handleSubmit = () => {
        controller.abort()
        const newController = new AbortController()
        setController(newController)

        if (name && name !== prevName && !nameError) {
            fetchAgeData(name, newController.signal, setAge)
            setPrevName(name)
        }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setName(inputValue)
        const isValid = /^[A-Za-zА-Яа-я]+$/u.test(inputValue)
        setNameError((inputValue === "" || isValid) ? null : "Имя может состоять только из букв");
    }

    useEffect(() => {
        controller.abort()
        const newController = new AbortController()
        setController(newController)

        if (debouncedName && debouncedName !== prevName && !nameError) {
            fetchAgeData(debouncedName, newController.signal, setAge)
            setPrevName(debouncedName)
        }
    }, [debouncedName])

    return (
        <Group mode='card' padding='m' style={{ minWidth: '25vw' }}>
            <form onSubmit={e => e.preventDefault()}>
                <FormItem>
                    <Input placeholder='Введите имя...' onChange={handleName} status={nameError ? 'error' : 'default'} />
                    {<span style={{color: 'red'}}>{nameError}</span>}
                </FormItem>

                {age && (
                    <FormItem style={{textAlign: 'center'}}>
                        <span>Возраст: {age}</span>
                    </FormItem>
                )}

                <FormItem>
                    <FetchButton onClick={handleSubmit}>Get age</FetchButton>
                </FormItem>
            </form>
        </Group>
    )
}

export default AgeForm