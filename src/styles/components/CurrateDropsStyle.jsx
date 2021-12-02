import styled from 'styled-components'
import imageMob from '../../assets/CurrateDrops/imageMob.png'
import imageDesk from '../../assets/CurrateDrops/imageDesk.png'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 85px 0;
  ${ResponsiveTo('Desktop13')}{
    flex-direction: row;
    flex-wrap: nowrap;
  }
`
export const HeaderContainer = styled.div`
  margin: 0 61px;
  ${ResponsiveTo('Tablet')}{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 0px;
  }
`
export const ImageBox = styled.section`
  width: 100%;
  height: 339px;
  background-image: url(${imageMob});
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: contain;
     
  
  ${ResponsiveTo('Tablet')}{
    width: 100%;
    position: relative;
    height: 455px;
    left: -50px;
  }
  ${ResponsiveTo('Desktop13')}{
    position: static;
    background-image: url(${imageDesk});
    width: 658px;
    height: 925px;
    background-size: cover;
  }
`
export const Title = styled.section`
  margin-top: 18px;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;
  ${ResponsiveTo('Desktop13')}{
    display: none;
  }
`
export const TitleDesk = styled(Title)`
  display:none;
  ${ResponsiveTo('Desktop13')}{
    display: block;
    margin: 0 84px;
  }

`
export const Text = styled.section`
  
  font-weight:400;
  font-size:21px;
  line-height: 25px ;
  margin: 0 45px;  
  margin-top: 81px;   
  p{
    margin-bottom: 20px;
  }
  ${ResponsiveTo('Tablet')}{
    margin: 0 84px; 
    margin-top: 64px;  
  }
`
