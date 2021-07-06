import {motion} from 'framer-motion';
import React, {Dispatch, SetStateAction} from 'react';
import {IconBaseProps} from 'react-icons/lib';

export enum Category {
  None,
  Navigation,
  Collection,
  Social,
}

export class Suggestion {
  icon: IconBaseProps;
  category: Category;
  name: string;
  key: string;
  execute: () => void;
  choices?: Suggestion[];

  constructor(
    icon: IconBaseProps,
    category: Category,
    name: string,
    execute: () => void,
    choices?: Suggestion[],
  ) {
    this.icon = icon;
    this.category = category;
    this.name = name;
    this.key = Math.random().toString(36).slice(2);
    this.execute = execute;
    this.choices = choices;
  }
}

export const SuggestionView = ({
  item,
  selected,
  ...props
}: {
  item: Suggestion;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
  click: () => void;
}) => {
  return (
    <motion.div
      key={item.key}
      layout
      layoutId={item.key}
      initial={{opacity: 0, maxHeight: 'auto'}}
      animate={{opacity: 1, maxHeight: 'auto'}}
      exit={{opacity: 0, maxHeight: '0px', transition: {duration: 0}}}
      transition={{
        type: 'spring',
        damping: 80,
        stiffness: 2000,
      }}
      className="
				flex
				relative
				items-center
				my-1
				mx-3"
      onMouseOver={() => {
        props.setSelected(item.key);
      }}
    >
      {selected && (
        <motion.div
          layoutId="selection"
          transition={{
            type: 'spring',
            damping: 65,
            stiffness: 1800,
          }}
          className="
						absolute
						right-0
						w-full
						h-full
						rounded-md
						bg-bg"
        />
      )}
      <div className="relative z-10 w-full">
        <button
          type="button"
          className="
						flex
            items-center
						py-3
						px-5
						w-full
						bg-transparent
						rounded-md
						transition-all
						outline-none
						focus:outline-none
						"
          onFocus={() => {
            props.setSelected(item.key);
          }}
          onClick={props.click}
        >
          <div className="mt-px mr-3">{item.icon}</div>
          <span>{item.name}</span>
        </button>
      </div>
    </motion.div>
  );
};
