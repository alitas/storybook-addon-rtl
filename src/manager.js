import React from 'react'
import addons from '@storybook/addons'
import RTLPanel from './containers/RTLPanel'
import { ADDON_ID, PANEL_ID } from './constants'

export function register () {
  addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel()
    addons.addPanel(PANEL_ID, {
      title: 'RTL',
      /* eslint-disable-next-line react/prop-types */
      render: ({ active }) => active ? <RTLPanel channel={channel} api={api} /> : null
    })
  })
}
