import { Container, ProfileImage, Menu } from './styles';
import { Input } from '../Input/';
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Header(){
    return(
        <Container>

                <Menu>
                    <GiHamburgerMenu
                        size={24}
                    />
                    <h1>MyGameList</h1>
                </Menu>

                
                <Input
                    icon={FiSearch}
                    placeholder='Pesquisar pelo título do jogo'
                />

                <ProfileImage>
                    <p>John Perfil</p>
                    <img src="https://github.com/fcomateus.png" alt="Foto de perfil"/>
                </ProfileImage>
        </Container>
    );
}