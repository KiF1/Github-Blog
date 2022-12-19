import { ArrowLeft, Buildings, CalendarBlank, ChatCircle, GithubLogo, SignOut, Users } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../../../lib/axios";
import { Container, Content, Icon, Icons } from "./styles";

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
//    const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
//    const getProfileData = useCallback(async () => {
//     const response = await api.get(`users/KiF1`)
//     setProfileData(response.data)
//    }, [profileData]);

//    useEffect(() => {
//     getProfileData();
//    }, [])
    return(
        <Container>
            <Content>
                <NavLink className="navLink" to={`${profileData.html_url}`}>
                  <ArrowLeft size={20} />
                  <span>Voltar</span>
                </NavLink>
                <a className="link" href={profileData.html_url}>GITHUB <SignOut size={20} /></a>
                <Icons>
                    <Icon>
                        <GithubLogo size={20} />
                        <span>{profileData.login}</span>
                    </Icon>
                    <Icon>
                        <CalendarBlank size={20} />
                        <span>Zaite</span>
                    </Icon>
                    <Icon>
                        <ChatCircle size={20} />
                        <span>{profileData.followers}</span>
                    </Icon>
                </Icons>
            </Content>
        </Container>
    )
}