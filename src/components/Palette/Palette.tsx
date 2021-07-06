import {Transition} from '@headlessui/react';
import {Category} from 'components/Palette/Suggestion';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import {useTheme} from 'next-themes';
import router from 'next/router';
import {
  default as React,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {
  AiOutlineBulb,
  AiOutlineCamera,
  AiOutlineCode,
  AiOutlineGithub,
  AiOutlineHeart,
  AiOutlineHighlight,
  AiOutlineHome,
  AiOutlineInsertRowAbove,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineRead,
  AiOutlineStar,
  AiOutlineTwitter,
} from 'react-icons/ai';
import {goBlog, goHome} from './Commands';
import {Suggestion, SuggestionView} from './Suggestion';

export const Palette = ({}) => {
  const [open, setOpen] = useState(false);

  useHotkeys(
    'cmd+k,ctrl+k',
    (e) => {
      e.preventDefault();
      setOpen((open) => !open);
    },
    {
      enableOnTags: ['INPUT'],
    },
  );

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <Transition
      show={open}
      className="
				fixed
				top-0
				right-0
				bottom-0
				left-0
				bg-transparent
				transition-all
				transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <CommandContainer
        close={() => {
          setOpen(false);
        }}
      />
    </Transition>
  );
};

const CommandContainer = ({close}: {close: () => void}) => {
  // @ts-ignore
  const {theme, setTheme} = useTheme();
  const [items, setItems] = useState<Suggestion[]>([
    new Suggestion(
      <AiOutlineHome size="1.4em" />,
      Category.Navigation,
      'Home',
      () => goHome(),
    ),
    new Suggestion(
      <AiOutlineStar size="1.4em" />,
      Category.Navigation,
      'Blog',
      () => goBlog(),
    ),
    new Suggestion(
      <AiOutlineMail size="1.4em" />,
      Category.Navigation,
      'Contact',
      () => router.push('/contact'),
    ),
    new Suggestion(
      <AiOutlineRead size="1.4em" />,
      Category.Collection,
      'Reading',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineInsertRowAbove size="1.4em" />,
      Category.Collection,
      'Keyboards',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineHeart size="1.4em" />,
      Category.Collection,
      'Music',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineCode size="1.4em" />,
      Category.Collection,
      'Projects',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineCamera size="1.4em" />,
      Category.Collection,
      'Words',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineBulb size="1.4em" />,
      Category.Collection,
      'Ideas',
      () => router.push('/'),
    ),
    new Suggestion(
      <AiOutlineTwitter size="1.4em" />,
      Category.Social,
      'Twitter',
      () => window.open('https://twitter.com/zxffo'),
    ),
    new Suggestion(
      <AiOutlineGithub size="1.4em" />,
      Category.Social,
      'GitHub',
      () => window.open('https://github.com/lewisblackburn'),
    ),
    new Suggestion(
      <AiOutlineStar size="1.4em" />,
      Category.None,
      'Theme',
      () => {},
      [
        new Suggestion(
          <AiOutlineHighlight size="1.4em" />,
          Category.None,
          'Light',
          () => setTheme('light'),
        ),
        new Suggestion(
          <AiOutlineMobile size="1.4em" />,
          Category.None,
          'Dark',
          () => setTheme('dark'),
        ),
      ],
    ),
  ]);
  const [predicate, setPredicate] = useState('');
  const [selected, setSelected] = useState<string | undefined>(items[0]?.key);

  const itemMap = useMemo(() => {
    return items.reduce<Record<string, Suggestion>>((map, item) => {
      map[item.key] = item;
      return map;
    }, {});
  }, [items]);

  const filteredItems = useMemo(() => {
    if (predicate.length <= 0) {
      return items;
    }

    return items.filter((item) =>
      item.name.toLowerCase().includes(predicate.toLowerCase()),
    );
  }, [items, predicate]);

  const ref = useOutsideClick<HTMLDivElement>(close);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const acceptCommand = () => {
    if (selected !== undefined) {
      const command = itemMap[selected];

      if (command.choices != undefined && command.choices!.length > 0) {
        setPredicate('');
        setItems(command.choices);
      } else {
        command.execute();
        close();
      }
    }
  };

  useHotkeys('esc', close, {
    enableOnTags: ['INPUT'],
  });

  useHotkeys('enter', acceptCommand, {
    enableOnTags: ['INPUT'],
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSelected(filteredItems[0]?.key);
  }, [filteredItems, items]);

  const moveFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length <= 0) {
      return;
    }

    // eslint-disable-next-line no-negated-condition
    const selectedIndex =
      selected !== undefined ? filteredItems.indexOf(itemMap[selected]) : 0;

    switch (e.key) {
      case 'ArrowDown': {
        setSelected(
          filteredItems[(selectedIndex + 1) % filteredItems.length].key,
        );
        break;
      }

      case 'ArrowUp': {
        setSelected(
          filteredItems[selectedIndex - 1]?.key ??
            filteredItems[filteredItems.length - 1]?.key,
        );
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <Transition.Child
      className="flex justify-center items-center h-full transition-all transform-gpu"
      enterFrom="scale-95 opacity-0"
      enterTo="scale-100 opacity-100"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-75 opacity-0"
    >
      <div
        ref={ref}
        className="
					flex
					absolute
					top-1/3
					flex-col
					w-3/4
					max-w-screen-sm
					max-h-96
					text-pallette-foreground-light
					dark:text-pallette-foreground-dark
						"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="
						flex-1
						px-5
						pt-4
						pb-5
						text-lg
						rounded-t-xl
						appearance-none
						focus:outline-none
						text-fg
						bg-bg
							"
          value={predicate}
          onInput={(e) => {
            setPredicate((e.target as HTMLInputElement).value);
          }}
          onKeyDown={moveFocus}
        />
        <AnimateSharedLayout>
          <motion.div
            layout
            layoutId="container"
            transition={{
              type: 'spring',
              damping: 80,
              stiffness: 2000,
            }}
            className="
							overflow-x-hidden
							overflow-y-scroll
							py-2
							rounded-b-xl
							bg-lightest-gray"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <div>
                  <SuggestionView
                    key={item.key}
                    item={item}
                    selected={item.key === selected}
                    setSelected={setSelected}
                    click={acceptCommand}
                  />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </Transition.Child>
  );
};

/**
 * Handle clicks outside of an element.
 * This is useful for closing a modal by clicking outside of the modal.
 * @param callback - The callback function to run when clicking outside of an element
 */
export function useOutsideClick<E extends HTMLElement = HTMLElement>(
  callback: () => unknown,
) {
  const container = useRef<E | null>(null);

  const stableCallback = useCallback(() => callback(), [callback]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!container.current) {
        return;
      }

      if (!container.current.contains(event.target as HTMLElement)) {
        stableCallback();
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [stableCallback]);

  return container;
}
