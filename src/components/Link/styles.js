import styled from "styled-components"
import { Link } from "react-router-dom"

export const SimpleLink = styled(Link)`
    color: #3D405B;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #edf6f9;

    &:hover {
        color: #023e8a;
        background-color: #E2EDF1;
  }

`