import React from 'react'
import VoxelDog from './voxel-dog'
const Template = args => <VoxelDog {...args} />

export default {
  title: 'Voxel',
  component: VoxelDog
}

export const Voxel = Template.bind({})
Voxel.args = {}
