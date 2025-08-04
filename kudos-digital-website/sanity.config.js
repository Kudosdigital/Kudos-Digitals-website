import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Kudos Digital Website',

  projectId: 'i3gm55cv',
  dataset: 'blog_posts',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
