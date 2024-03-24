import React from 'react';

type avatarProps = {
  name: string;
  image?: string;
};

const createInitials = (string: string) =>
  string
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');

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
