import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo, SignOut } from "phosphor-react";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { IPost } from "../../../Blog";
import { Container, Content, Icon, Icons } from "./styles";

interface PostSummaryProps {
    postData: IPost;
  }


export function Summary({ postData }: PostSummaryProps){
    const formattedDate = relativeDateFormatter(postData?.created_at);

    return(
        <Container>
            <Content>
                <a className="navLink" href="/"><ArrowLeft size={20} />Voltar</a>
                <a className="link" href={postData.html_url}>GITHUB <SignOut size={20} /></a>
                <h1>{postData.title}</h1>
                <Icons>
                    <Icon>
                        <GithubLogo size={20} />
                        <span>{postData.user.login}</span>
                    </Icon>
                    <Icon>
                        <CalendarBlank size={20} />
                        <span>{formattedDate}</span>
                    </Icon>
                    <Icon>
                        <ChatCircle size={20} />
                        <span>{postData.comments}</span>
                    </Icon>
                </Icons>
            </Content>
        </Container>
    )
}