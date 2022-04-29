import React from 'react';
import { Container, FormWrap, Icon, FormContent, FormH1, Text } from '../Description/DescriptionElements';

const Equipment = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">TMN</Icon>
                    <FormContent>
                            <FormH1>Equipment Page</FormH1>
                            <Text>It worked!</Text>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Equipment;