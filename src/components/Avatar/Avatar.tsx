import { createInitials } from '../../utils/utils';

type avatarProps = {
  name: string;
  image?: string;
};

const Avatar = ({ name, image = undefined, ...props }: avatarProps) => {
  return (
    <div {...props}>
      {image ? (
        <img
          src={image}
          alt={name}
        />
      ) : (
        <span>{createInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
