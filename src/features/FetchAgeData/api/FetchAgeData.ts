import { SetStateAction } from "react"

const API_URL = 'https://api.agify.io/'

export const fetchAgeData = async (name: string, signal: AbortSignal, setAge: React.Dispatch<SetStateAction<number | undefined>>) => {
    try {
        const response = await fetch(`${API_URL}?name=${name}`, { signal })
        const data = await response.json()
        setAge(data.age)
    } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') {
            // Прерывание запроса, чтобы уже сфокусироваться на новом, игнорируем ошибку
        } else {
            console.error('Error while fetching age data:', err)
        }
    }
}
