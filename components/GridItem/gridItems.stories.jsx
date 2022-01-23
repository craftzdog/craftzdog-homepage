import React from 'react'
import { WorkGridItem } from './grid-item'
const Template = args => <WorkGridItem {...args} />

export default {
  title: 'GridItem',
  component: WorkGridItem
}
export const WeatherCloud = Template.bind({})
WeatherCloud.args = {
  thumbnail: '/images/demo-image-default.jpg',
  title: 'Pideme'
}
