import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { Summary } from "./components/Summary";
import { Container } from "./styles";

export function Post(){
    const [postData, setPostData] = useState<IPost>({} as IPost);
    const { id } = useParams();
    const getPostsData = useCallback(
        async () => {
            const response =  await api.get(`repos/KiF1/Github-Blog/issues/${id}`);
            setPostData(response.data);
        }, [postData]);
    
    useEffect(() => {
        getPostsData();
    }, [])

    return(
        <Container>
            <Summary postData={postData} />
        </Container>
    )
}