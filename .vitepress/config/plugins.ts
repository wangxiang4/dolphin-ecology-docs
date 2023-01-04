import MarkdownIt from 'markdown-it'
import MarkdownItContainer from "markdown-it-container"
import path from 'path'
import fs from 'fs'
import { highlight } from '../utils/highlight'

const localMd = MarkdownIt()

const docRoot = path.resolve(__dirname, '..', '..')

const containerRegExp = /^demo\s*(.*)$/

export const mdPlugin = (md) => {
  md.use(MarkdownItContainer, 'demo', {
    validate(params) {
      return params.trim().match(containerRegExp)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(containerRegExp)
      if (tokens[idx].nesting === 1) {
        // opening tag.
        // :::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.
        // 
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.content ?? ""
        const source = sourceFileToken.type === "inline" ? fs.readFileSync(
          path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
          'utf-8'
        ) : undefined
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<VPDemo
                  :demos="demos"
                  source="${encodeURIComponent(highlight(source, 'vue'))}"
                  path="${sourceFile}" raw-source="${encodeURIComponent(source)}"
                  description="${encodeURIComponent(localMd.render(description))}">
                `
      } else {
        // closing tag
        return '</VPDemo>'
      }
    }
  })
}