import React from 'react';
import { Card, Image, Button, Label } from 'semantic-ui-react';

const toVaros = s => `$${s}`;

const style = {
  price: {
    size: 30
  },
};

export default ({ imageSrc, price, vendor, title, shopURL }) => {
  return (
    <Card>
      <Card.Content textAlign={"center"}>
        <a href={shopURL} target="_blank">
          <Image src={imageSrc} size="small" centered/>
        </a>
      </Card.Content>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{vendor}</span>
        </Card.Meta>
        <Card.Description style={style.price}>
          <Label.Group tag>
            <Label as='a' >{toVaros(price)}</Label>
          </Label.Group>
        </Card.Description>
        <Card.Content extra>
          <a href={shopURL} target="_blank">
            <Button basic fluid color='teal'>
              Encontrado en {vendor}
            </Button>
          </a>
        </Card.Content>
      </Card.Content>
    </Card>
  )
};
