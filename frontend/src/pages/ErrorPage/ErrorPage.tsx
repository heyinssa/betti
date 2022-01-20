import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
const ErrorPage = () => {
    const navigate = useNavigate();


    return (
        <Container>
            이 산이 아닌가벼?
            <Button onClick={() => navigate('/')}>메인 페이지로 돌아가기</Button>
        </Container >
    );
}

export default ErrorPage;