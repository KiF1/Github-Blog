import { Buildings, GithubLogo, SignOut, Users } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Avatar, Container, Content, Icon, Icons } from "./styles";

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
  }


export function Summary(){
   const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
   const getProfileData = useCallback(async () => {
    const response = await api.get(`users/KiF1`)
    setProfileData(response.data)
   }, [profileData]);

   useEffect(() => {
    getProfileData();
   }, [])
    return(
        <Container>
            <Avatar src={profileData.avatar_url} />
            <Content>
                <a href={profileData.html_url}>GITHUB <SignOut size={20} /></a>
                <h1>{profileData.name}</h1>
                <strong>{profileData.bio}</strong>
                <Icons>
                    <Icon>
                        <GithubLogo size={20} />
                        <span>{profileData.login}</span>
                    </Icon>
                    <Icon>
                        <Buildings size={20} />
                        <span>Zaite</span>
                    </Icon>
                    <Icon>
                        <Users size={20} />
                        <span>{profileData.followers}</span>
                    </Icon>
                </Icons>
            </Content>
        </Container>
    )
}