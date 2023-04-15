import { IconContext } from 'react-icons';
import { FaEdit, FaTrash } from 'react-icons/fa';
import InfoTip from './InfoTip';

export default function Icon({ type, onClick }) {
  return (
    <>
      <IconContext.Provider value={{ color: '#707070' }}>
        <span role="button" id={type} onClick={onClick}>
          {type === 'edit' ? <FaEdit /> : <FaTrash />}
        </span>
      </IconContext.Provider>
      <InfoTip title={type} target={type} />
    </>
  );
}
