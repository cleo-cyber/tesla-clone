import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for Touchless Delivery"
                backgroud="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order online for Touchless Delivery"
                backgroud="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section
                title="Model 3"
                description="Order online for Touchless Delivery"
                backgroud="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />

            <Section
                title="Model X"
                description="Order online for Touchless Delivery"
                backgroud="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />

            <Section
                title="Lower Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroud="solar-panel.jpg"
                leftBtnText=" Order Now"
                rightBtnText="Learn More" />
            <Section
                title="Solar for New Roofs"
                description="Solar Roofs Cost Less than Roof"
                backgroud="solar-roof.jpg"
                leftBtnText=" Order Now"
                rightBtnText="Learn More" />
            <Section
                title="Accessories"
                description=""
                backgroud="accessories.jpg"
                leftBtnText="Shop Now"
                 />

        </Container>
    )
}


const Container = styled.div`
height:100vh;

`
export default Home