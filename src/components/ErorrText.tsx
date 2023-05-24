interface ErorrTextProps {
    error: string
}


export function ErorrText({error} : ErorrTextProps){
    return (
        <p className="text-center text-red-600">{error}</p>
    )
}