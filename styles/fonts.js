import { Inconsolata, Prompt } from "@next/font/google"

export const prompt = Prompt({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: ['500', '800']
})
export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  weight: ['500', '800']
})