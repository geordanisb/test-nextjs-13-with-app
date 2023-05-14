"use client"
import React, { FC } from "react"
import { Container } from "react-bootstrap"

interface Props{
    children: React.ReactNode
}
const LayoutContainer:FC<Props> = ({children})=>{
    return <Container>
        <main>
            {children}
        </main>
    </Container>
}
export default LayoutContainer;