import React from 'react'
import { shallow } from 'enzyme'

import { GameScreen } from '../../../client/components/GameScreen'

test('send player to', () => {
    const playerPosition = 4
    const currentRound = 1
    const playerIdList = [155,156,157,158,159]

    const expected = 159

    // console.log({playerPosition})
    // console.log({currentRound})
    // console.log({playerIdList})

    const wrapper = shallow(<GameScreen playerPosition={playerPosition} currentRound={currentRound} playerIdList={playerIdList}/>)
    const actual = wrapper.instance().findPlayerToSendTo()
    
    expect(actual).toEqual(expected)
})

test('send player to', () => {
    const playerPosition = 4
    const currentRound = 2
    const playerIdList = [155,156,157,158,159]

    const expected = 155

    // console.log({playerPosition})
    // console.log({currentRound})
    // console.log({playerIdList})

    const wrapper = shallow(<GameScreen playerPosition={playerPosition} currentRound={currentRound} playerIdList={playerIdList}/>)
    const actual = wrapper.instance().findPlayerToSendTo()
    
    expect(actual).toEqual(expected)
})

test('send player to', () => {
    const playerPosition = 4
    const currentRound = 3
    const playerIdList = [155,156,157,158,159]

    const expected = 156

    // console.log({playerPosition})
    // console.log({currentRound})
    // console.log({playerIdList})

    const wrapper = shallow(<GameScreen playerPosition={playerPosition} currentRound={currentRound} playerIdList={playerIdList}/>)
    const actual = wrapper.instance().findPlayerToSendTo()
    
    expect(actual).toEqual(expected)
})

test('send player to', () => {
    const playerPosition = 4
    const currentRound = 4
    const playerIdList = [155,156,157,158,159]

    const expected = 157

    // console.log({playerPosition})
    // console.log({currentRound})
    // console.log({playerIdList})

    const wrapper = shallow(<GameScreen playerPosition={playerPosition} currentRound={currentRound} playerIdList={playerIdList}/>)
    const actual = wrapper.instance().findPlayerToSendTo()
    
    expect(actual).toEqual(expected)
})

test('send player to', () => {
    const playerPosition = 4
    const currentRound = 5
    const playerIdList = [155,156,157,158,159]

    const expected = 158

    // console.log({playerPosition})
    // console.log({currentRound})
    // console.log({playerIdList})

    const wrapper = shallow(<GameScreen playerPosition={playerPosition} currentRound={currentRound} playerIdList={playerIdList}/>)
    const actual = wrapper.instance().findPlayerToSendTo()
    
    expect(actual).toEqual(expected)
})
