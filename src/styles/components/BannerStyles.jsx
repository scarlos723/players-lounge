import styled from 'styled-components'
import imgBanner from '../../assets/Banner/BannerImage.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
export const Container = styled.div`
  width: 100%;
  background-color: #0F0223;
  padding-top: 80px;
  ${ResponsiveTo()} {
    padding: 0;
  }

`

export const ImageBanner = styled.div`
  width: 100%;
  height: 383px;
  background-image: url(${imgBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  ${ResponsiveTo()} {
    height: 955px;
  }
`
export const BePartSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px 40px;
  ${ResponsiveTo()} {
    padding:90px 300px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  color: white;
  text-align:center;
 `
export const Text = styled.div`
  font-size: 21px;
  color:white;
  text-align:center;
  margin: 20px 0px;
`
export const BoxButtons = styled.section`
  margin: 0px auto;
  margin-top: 20px;
  width: 292px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  ${ResponsiveTo()} {
    margin-top: 40px;
    width: 419px;
  }
 
`
export const JoinBtn = styled.button`
  width: 122.21px;
  height: 36.42px;
  left: 234px;
  top: 898px;
  font-size: 18px;
  background: #FFFFFF;
  border-radius: 57px;
  font-weight: 700;
`
export const LoginBtn = styled.button`
  font-weight: 700;
  width: 122.21px;
  height: 36.42px;
  left: 404px;
  top: 898.69px;
  font-size: 18px;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 57px;
  color: white;
`
