import styled from "styled-components";

export const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Las etiquetas se envuelven en filas cuando no caben en el ancho del contenedor */
    justify-content: flex-start; /* Comienza a alinear las etiquetas desde la izquierda */
`;

export const TechStackCard = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    margin: 0.5rem;
    max-width: 200px; /* Ancho máximo para cada etiqueta */
    word-wrap: break-word; /* Permite que el texto largo se divida en múltiples líneas */
`;

export const ProjectImageContainer = styled.div`
    display: flex;
    justifi-content: ${({$justify}) => $justify}
`

export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 80%;
    heihght: 300px;
    object-fit: cover;
    border-radius: 10px;
`