import React, { useState } from "react"
import { useEffect } from 'react'
import Header from "@/components/Header"
import { Container, Title, Button, Box, Text, Input, Wrap, Label, Form, Load } from "../styles/style"
import loadImage from "@/assets/loading.gif"
import data from "@/data/db"
const { airport } = data
import dbTheme from '@/styles/theme.json'
const { colors } = dbTheme


export default function Home() {
  const [inputDatas, setInputDatas] = useState([])

  useEffect(() => {
    const airportList = document.getElementById('airportList')
    // console.log(airport)

    airportList.innerHTML = ""
    airport.forEach(element => airportList.innerHTML += `
      <option>${element.code} - ${element.name} - ${element.city} - ${element.country}</option>
    `)

    const dateToday = new Date().toISOString().split('T')[0]
    const inputData = document.querySelectorAll('input[type="date"]')
    inputData.forEach(element => element.setAttribute("min", dateToday))

    setInputDatas(inputData)
  }, [])

  function validateDate() {
    const warnDates = document.getElementById('warnDates')
    const departureDate = document.getElementById('departureDate').value
    const backDate = document.getElementById('backDate').value
    if (departureDate && backDate) {
      if (departureDate > backDate) {
        warnDates.classList.remove('d-none')
      } else {
        warnDates.classList.add('d-none')
      }
    }
  }
  inputDatas.forEach(element => element.addEventListener('change', () => validateDate()))

  function alert (text, type){
    Swal.fire({      
      html: text,
      icon: type,
      confirmButtonText: 'OK',
      confirmButtonColor: colors[type]
    });
  }

  function submitForm() {
    const load = document.getElementById('loading')
    console.log(load)
    load.classList.remove('d-none')

    setTimeout(() => {
      const formData = new FormData(document.getElementById('formAirline'))
      console.log(formData.entries())
      const formDataValues = {}

      let hasEmptyValue = false
      for (const [key, value] of formData.entries()) {
        if (value.trim() === '') {
          hasEmptyValue = true
          break
        }
      }

      if (hasEmptyValue) {
        load.classList.add('d-none')
        
        alert('Preencha todos os campos do formulário', 'warning')
        return
      }

      for (let [key, value] of formData.entries()) {
        formDataValues[key] = value;
      }

      if (formDataValues.adultPassenger < 1) {
        load.classList.add('d-none') 
        alert('Precisa ter no mínimo 1 adulto!', 'warning')        
        return
      }
      console.log(formDataValues)

      load.classList.add('d-none') 
      alert('Informações enviadas com sucesso!', 'success')
      
    }, 2000)


  }

  return (
    <>
      <Header></Header>
      <Container $hasPadding="true">


        <Title>Compre sua Passagem Aérea</Title>

        <Form id="formAirline">
          <Box>
            <Wrap>
              <Label htmlFor="from">Origem</Label>
              <Input type="text" name="from" id="from" list="airportList" placeholder="Onde vai embarcar?"></Input>
              <datalist id="airportList"></datalist>
            </Wrap>
            <Wrap>
              <Label htmlFor="to">Destino</Label>
              <Input type="text" name="to" id="to" list="airportList" placeholder="Onde vai viajar? " ></Input>
            </Wrap>
          </Box>
          <Wrap>
            <Box>
              <Wrap>
                <Label htmlFor="departureDate">Ida</Label>
                <Input type="date" name="departureDate" id="departureDate" ></Input>
              </Wrap>
              <Wrap>
                <Label htmlFor="backDate">Volta</Label>
                <Input type="date" name="backDate" id="backDate" ></Input>
              </Wrap>
            </Box>
            <div id="warnDates" className="text-center d-none">
              <Text color="error" $variant="small" $bold>A data de volta tem que ser igual ou maior que a data de ida.</Text>
            </div>
          </Wrap>
          <div>
            <Text>Passageiros</Text>
            <Box>
              <Wrap>
                <Label htmlFor="adultPassenger">Adultos</Label>
                <Input type="number" name="adultPassenger" id="adultPassenger" placeholder="+12 anos"></Input>
              </Wrap>
              <Wrap>
                <Label htmlFor="childPassenger">Crianças</Label>
                <Input type="number" name="childPassenger" id="childPassenger" placeholder="0 a 11 anos"></Input>
              </Wrap>
            </Box>
          </div>
          <Wrap>
            <Label htmlFor="name">Nome do Responsável</Label>
            <Input type="text" name="name" id="name" placeholder="Digite o nome completo"></Input>
          </Wrap>
          <Wrap>
            <Label htmlFor="email">Email do Responsável</Label>
            <Input type="email" name="email" id="email" placeholder="Digite o email"></Input>
          </Wrap>


          <Button id="submitBtn" type="button" onClick={() => submitForm()}>Concluir</Button>
        </Form>
      </Container>
      <Load id="loading" className="d-none">
        <img src={loadImage.src} />
      </Load>

    </>
  )
}
