import React from "react"
import { Container } from "@/styles/style"
import {Li, Menu, Img} from "@/components/Header/style"
import logoImage from "@/assets/world-tour-icon.svg"

export default function Header(){
    
    return(
        
        <>        
        <Container className="flex-row" $minH="none">
            <Img src={logoImage.src} alt="logo-imagem" $maxWidth="130px"/>
            <Menu>
                <Li onClick={()=>alert("Clicou em Home")}>Home</Li>
                <Li onClick={() => alert("Clicou em Sobre")}>Sobre</Li>
                <Li onClick={() => alert("Clicou em Contato")}>Contato</Li>
            </Menu>
        </Container>
        
        </>
        
    )
}