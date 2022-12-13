import { Buildings, GithubLogo, SignOut, Users } from "phosphor-react";
import { Avatar, Container, Content, Icon, Icons } from "./styles";


export function Summary(){
    return(
        <Container>
            <Avatar src="https://avatars.githubusercontent.com/u/96916125?v=4" />
            <Content>
                <a href="https://github.com/KiF1">GITHUB <SignOut size={20} /></a>
                <h1>Cameron Williamson</h1>
                <strong>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</strong>
                <Icons>
                    <Icon>
                        <GithubLogo size={20} />
                        <span>Kif1</span>
                    </Icon>
                    <Icon>
                        <Buildings size={20} />
                        <span>Zaite</span>
                    </Icon>
                    <Icon>
                        <Users size={20} />
                        <span>36</span>
                    </Icon>
                </Icons>
            </Content>
        </Container>
    )
}