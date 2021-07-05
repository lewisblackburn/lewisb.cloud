// @ts-ignore
import {useTheme} from 'next-themes'
import router from 'next/router'
import {useEffect, useState} from 'react'
import CommandPalette from 'react-command-palette'

export default function Palette() {
  // @ts-ignore
  const {theme, setTheme} = useTheme()

  const allCommands = [
    {
      id: 1,
      name: 'Theme',
      category: 'nested',
      commands: [
        {
          name: 'Light',
          command() {
            setTheme('light')
          },
        },
        {
          name: 'Dark',
          command() {
            setTheme('dark')
          },
        },
      ],
      command() {},
    },
    {
      id: 2,
      name: 'Blog',
      category: 'Navigation',
      command() {
        router.push('/blog')
      },
    },
    {
      id: 3,
      name: 'Back',
      category: 'Navigation',
      command() {
        router.back()
      },
    },
    {
      id: 4,
      name: 'Home',
      category: 'Navigation',
      command() {
        router.push('/')
      },
    },
    {
      id: 5,
      name: 'Search blog...',
      category: 'nested',
      commands: [
        {
          name: 'Article',
          command() {},
        },
      ],
      command() {},
    },
    {
      id: 6,
      name: 'Twitter',
      category: 'social',
      command() {
        router.push('https://twitter.com/zxffo')
      },
    },
    {
      id: 7,
      name: 'GitHub',
      category: 'social',
      command() {
        router.push('https://github.com/lewisblackburn')
      },
    },
  ]

  const [closeOnSelect, setCloseOnSelect] = useState(false)
  const [nested, setNested] = useState(null)
  const [commands, setCommands] = useState(allCommands)

  const commandIsNested = (command: any) => {
    return command.category === 'nested'
  }

  // get authour's books to use as subcommands
  // @ts-ignore
  const commandInNested = (nested: any) => {
    if (nested) {
      return allCommands.filter((command) => command.name === nested)[0]
        .commands
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (nested) setCommands(commandInNested(nested))
    else setCommands(allCommands)
  }, [nested])

  return (
    <CommandPalette
      alwaysRenderCommands
      closeOnSelect={closeOnSelect}
      commands={commands}
      defaultInputValue=""
      display="modal"
      onSelect={(command: any) => {
        if (commandIsNested(command)) {
          // console.log('setCloseOnSelect: true')
          setCloseOnSelect(true)
          setNested(command.name)
        } else {
          // console.log('selected command has no commands')
          // console.log('setCloseOnSelect: false')
          setCloseOnSelect(false)
          setNested(null)
        }
      }}
      // onRequestClose={() => {}}
      highlightFirstSuggestion
      hotKeys="command+k"
      maxDisplayed={100}
      options={{
        allowTypo: true,
        key: 'name',
        keys: ['name'],
        limit: 7,
        scoreFn: null,
        threshold: -Infinity,
      }}
      placeholder="Type a command or search..."
      reactModalParentSelector="body"
      resetInputOnOpen
      shouldReturnFocusAfterClose
      resetInputOnClose
      showSpinnerOnSelect={false}
      theme={{
        modal: 'my-modal',
        overlay: 'my-overlay',
        header: 'my-header',
        container: 'my-container',
        content: 'my-content',
        containerOpen: 'my-containerOpen',
        input: 'my-input',
        inputOpen: 'my-inputOpen',
        inputFocused: 'my-inputFocused',
        spinner: 'my-spinner',
        suggestionsContainer: 'my-suggestionsContainer',
        suggestionsContainerOpen: 'my-suggestionsContainerOpen',
        suggestionsList: 'my-suggestionsList',
        suggestion: 'my-suggestion',
        suggestionFirst: 'my-suggestionFirst',
        suggestionHighlighted: 'my-suggestionHighlighted',
        trigger: 'my-trigger',
      }}
      trigger={<div></div>}
    />
  )
}
