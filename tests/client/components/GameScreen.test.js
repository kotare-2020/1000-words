import React from 'react'
import { shallow } from 'enzyme'

import { GameScreen } from '../../../client/components/GameScreen'

test('send player to', () => {
    const wrapper = shallow(<GameScreen/>)
    const playerToSendTo = wrapper.instance().findPlayerToSendTo()
    console.log({playerToSendTo})

    console.log(wrapper.debug())
})
