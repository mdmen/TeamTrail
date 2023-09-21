import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

type IconProps = Omit<FontAwesomeIconProps, 'icon'>;

export const IconEnvelope = (props: IconProps) => (
  <FontAwesomeIcon {...props} icon={faEnvelope} />
);

export const IconElepsisVertical = (props: IconProps) => (
  <FontAwesomeIcon {...props} icon={faEllipsisVertical} />
);
