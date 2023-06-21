import './App.css'
import Header from './components/header/header'
import Cadastro from './components/login/login'
import Menu from './components/menu/menu'
import Container from './components/corpo/corpo'
import Cardinfolist from './components/carinfolist/cardinfolist'
import Footer from './components/footer/footer'
import Rodape from './components/rodape/rodape'
import Boxcalcado from './components/box/box-calcados'
import Boxmas from './components/box/box-calcado-mas'





function App() {

  return (
    <>
        <Header></Header>
        <Cadastro></Cadastro>
        <Menu></Menu>
        <Container></Container>
        <Cardinfolist></Cardinfolist>
        <Boxcalcado></Boxcalcado>
        <Boxmas></Boxmas>
        <Footer></Footer>
        <Rodape></Rodape>
    </>
  )
}

export default App
