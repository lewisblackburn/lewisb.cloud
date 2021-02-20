import {toast} from 'react-hot-toast'

interface MerryChirstmasProps {}

const MerryChirstmas: React.FC<MerryChirstmasProps> = ({}) => {
  return (
    <div>
      <button
        className={'bg-gray-100 dark:bg-gray-800 py-3 px-10 rounded-lg'}
        onClick={() => toast.success('Merry Chirstmas!')}
      >
        Press Me!
      </button>
    </div>
  )
}

export default MerryChirstmas
