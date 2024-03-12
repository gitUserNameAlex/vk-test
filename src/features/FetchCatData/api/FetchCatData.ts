import { SetStateAction } from "react"

const API_URL = 'https://catfact.ninja/fact'

export const fetchCatData = async (setFact: React.Dispatch<SetStateAction<string>>) => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setFact(data.fact)
    } catch (err) {
        console.log('Error while fetching cat data:', err)
    }
}
