import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="text-center">Marvel</h1>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
