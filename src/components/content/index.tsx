import * as C from "./styled"

interface IpProps{
    children:React.ReactNode;
}
export const Content:React.FC<IpProps> = ({children}) => {
   
    return(
        <>
        <C.Container >
            {children}
        </C.Container>
        </>
    )
}