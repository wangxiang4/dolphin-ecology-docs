import fs from 'fs'
import path from 'path'

export const docRoot = path.resolve(__dirname, '..', '..')

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0]
