import { Container, LoginArea, Background } from './styles';
import { Input } from '../../components/Input';
import { HiOutlineMail } from 'react-icons/hi'
import { BsKey } from 'react-icons/bs'

export function Login() {
    return (
        <Container>
            <LoginArea>
                <Input
                    icon={HiOutlineMail}
                    placeholder='E-mail'
                    
                />
                <Input
                    icon={BsKey}
                    placeholder='Password'
                />
            </LoginArea>

            <Background/>
        </Container>
    )
}