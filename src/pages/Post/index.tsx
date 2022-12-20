import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { Container } from "../Blog/styles";
import { Content } from "./components/Content";
import { Summary } from "./components/Summary";

export function Post(){
    const [postData, setPostData] = useState<IPost>({} as IPost);
    const { id } = useParams();
    const getPostsData = useCallback(
        async () => {
            const response =  await api.get(`repos/KiF1/Github-Blog/issues/${id}`);
            console.log(response.data);
            setPostData(response.data);
        }, [postData]);
    
    useEffect(() => {
        getPostsData();
    }, [])

    return(
        <Container>
            <Summary postData={postData} />
            <Content content={postData.body} />
        </Container>
    )
}