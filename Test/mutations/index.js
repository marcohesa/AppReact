import gql from 'graphql-tag';

export const NUEVA_ENCUESTA = gql`
    mutation crearEncuesta($inputs: [EncuestaInput]) {
        crearEncuesta(inputs: $inputs)
    }
`;

