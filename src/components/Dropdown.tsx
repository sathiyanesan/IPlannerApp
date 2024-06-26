import { ChangeEvent, ReactNode,  useState } from "react"

const countries = [
    {
        name: 'India',
        value: 'IN',
        cities: ['Chennai', 'Mumbai']
    },
    {
        name: 'Pakistan',
        value: 'PK',
        cities: ['Lahore', 'Karachi']
    },
    {
        name: 'Bangladesh',
        value: 'BG',
        cities: ['Dhaka', 'Chittagong']
    }
]


interface Country {
    name: string,
    value: string,
    cities: string[]
}

const Dropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleCountrySelect = (e: ChangeEvent<HTMLSelectElement>) => {

        console.log(e.target.value)
        setSelectedCountry(e.target.value)
    }


    return (<>

        <select
            onChange={(e) => handleCountrySelect(e)}
            value={selectedCountry}
        >
            <option value=""></option>
            {countries.map((country: Country): ReactNode => (
                // console.log(country.name)       
                <option value={country.name}>{country.name}</option>
            ))}


        </select>

        <select>
            <option value=""></option>
            {countries.map((country: Country): ReactNode => (
                country.name === selectedCountry &&
                country.cities.map((city: string): ReactNode => (
                    // console.log(city)

                    < option value={city} > {city}</option>
                ))

            ))

            }
        </select >

    </>)

}

export default Dropdown;