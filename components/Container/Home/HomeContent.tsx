import React, { FC, useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { styled } from 'twin.macro';
import CompleteProfileModal from './components/CompleteProfileModal';

const HomeContent: FC = () => {
  const [showCompleteProfileModal, setShowCompleteProfileModal] = useState<boolean>(false);
  return (
    <>
      <div tw="flex flex-col gap-2 w-full h-full">
        <ProfileMenu name="Nama Depan" content="Wahib" />
        <ProfileMenu name="Nama Belakang" content="Adiyatma" />
        <ProfileMenu name="No. Telepon" content="+6281226353377" />
        <ProfileMenu
          name="Alamat"
          content="Jalan Sepakat X No.85A, Cilangkap, Cipayung, Jakarta Timur"
        />
      </div>
      {showCompleteProfileModal && (
        <CompleteProfileModal
          isOpen={showCompleteProfileModal}
          onClose={() => setShowCompleteProfileModal(false)}
        />
      )}
    </>
  );
};

export default HomeContent;

type ProfileMenuProps = {
  name: string;
  content: string;
};

const ProfileMenu: FC<ProfileMenuProps> = (props) => {
  const { name, content } = props;
  return (
    <div tw="flex justify-between items-center py-4 border-b-[2px] border-solid text-[#555555]">
      <h4 tw="text-base font-semibold">{name}</h4>
      <div tw="flex items-center gap-2 max-w-[60%]">
        <span>{content}</span>
        <GoChevronRight size={20} style={{ minWidth: '1.25rem' }} />
      </div>
    </div>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
  background-color: #388067;
  color: #ffffff;
  font-weight: 500;
  width: 100%;
  border-radius: 0.75rem;

  :disabled {
    cursor: not-allowed;
  }

  :hover {
    transform: scale(1.02);
  }
`;
