import styled from 'styled-components';
import Image from 'next/image';
import cat from 'public/cat.jpeg';

const ProfileArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Profile(props: any) {
    const { profile } = props;

    return (
        <ProfileArticle>
            <Image
                src={cat}
                alt="Profile Image"
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
                priority
            />
            <p>{profile.name}</p>
            <p>{profile.birthday}</p>
        </ProfileArticle>
    );
}
