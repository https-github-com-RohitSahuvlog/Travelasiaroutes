import React, { useEffect } from "react";

import styled from "@emotion/styled";
import Banner from "./banner/banner";
import Product from "./product/products";
const Landingpage = styled.div`

`;

export default function ClotheslandingPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Landingpage className="Landingpage">
            <Banner />
            <Product />
        </Landingpage>
    );
}
